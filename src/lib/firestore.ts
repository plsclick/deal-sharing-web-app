import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, arrayUnion, query, orderBy } from 'firebase/firestore';

export interface ChatSession {
  id: string;
  title: string;
  updatedAt: number;
}

export async function getUserChats(uid: string): Promise<ChatSession[]> {
  if (!db) return [];
  try {
    const q = query(collection(db, 'users', uid, 'chats'), orderBy('updatedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const chats: ChatSession[] = [];
    querySnapshot.forEach((doc) => {
      chats.push({ id: doc.id, ...doc.data() } as ChatSession);
    });
    return chats;
  } catch (e) {
    console.error("Error getting user chats:", e);
    return [];
  }
}

export async function createChat(uid: string, firstMessage: string): Promise<string> {
  if (!db) throw new Error("Firestore not initialized");
  
  const chatId = Date.now().toString(); // Use timestamp as ID for simple ordering
  const docRef = doc(db, 'users', uid, 'chats', chatId);
  
  // Generate a short title from the first message
  let title = firstMessage.substring(0, 30);
  if (firstMessage.length > 30) title += "...";

  await setDoc(docRef, {
    title,
    updatedAt: Date.now(),
    messages: []
  });

  return chatId;
}

export async function loadUserChatHistory(uid: string, chatId: string) {
  if (!db) return [];
  try {
    const docRef = doc(db, 'users', uid, 'chats', chatId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().messages || [];
    }
    return [];
  } catch (e) {
    console.error("Error loading chat:", e);
    return [];
  }
}

export async function saveMessageToFirestore(uid: string, chatId: string, message: any) {
  if (!db) return;
  try {
    const docRef = doc(db, 'users', uid, 'chats', chatId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // Should ideally be created before this, but just in case
      await setDoc(docRef, { 
        title: "New Chat", 
        updatedAt: Date.now(),
        messages: [message] 
      });
    } else {
      await updateDoc(docRef, {
        messages: arrayUnion(message),
        updatedAt: Date.now()
      });
    }
  } catch (e) {
    console.error("Error saving message:", e);
  }
}
