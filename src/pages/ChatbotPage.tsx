import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Send, Sparkles, Mic, MessageSquare, Plus, MoreHorizontal, Loader2, LogIn } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import { getChatResponse } from "../lib/gemini";
import { loadUserChatHistory, saveMessageToFirestore, getUserChats, createChat, type ChatSession } from "../lib/firestore";

interface Message {
  id: string | number;
  role: "user" | "ai";
  content: string;
}

const DEFAULT_GREETING: Message = {
  id: 1,
  role: "ai",
  content: "Hello! I'm DealSmart AI, your personal shopping assistant. What product are you looking for today? I can help you find the best prices, compare platforms, or set up price drop alerts."
};

export function ChatbotPage() {
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([DEFAULT_GREETING]);
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_PROMPTS = [
    "Best phone under ₹20,000",
    "Find cheapest earbuds on Amazon",
    "Compare this deal with Flipkart",
    "Is this a real discount?"
  ];

  useEffect(() => {
    if (user) {
      fetchChats();
    } else {
      setMessages([{
        id: 1,
        role: "ai",
        content: "Hello! I'm DealSmart AI. Please sign in to chat and save your history."
      }]);
      setChats([]);
      setActiveChatId(null);
    }
  }, [user]);

  const fetchChats = async () => {
    if (!user) return;
    const userChats = await getUserChats(user.uid);
    setChats(userChats);
  };

  useEffect(() => {
    if (user && activeChatId) {
      loadUserChatHistory(user.uid, activeChatId).then((history) => {
        if (history && history.length > 0) {
          setMessages(history);
        } else {
          setMessages([DEFAULT_GREETING]);
        }
      });
    }
  }, [activeChatId, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleNewChat = () => {
    setActiveChatId(null);
    setMessages([DEFAULT_GREETING]);
  };

  const handleSend = async (e?: React.FormEvent, customPrompt?: string) => {
    e?.preventDefault();
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || !user || isLoading) return;
    
    const userMessage: Message = { id: Date.now().toString(), role: "user", content: textToSend };
    
    // Update local state
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    let currentChatId = activeChatId;

    try {
      if (!currentChatId) {
        currentChatId = await createChat(user.uid, textToSend);
        setActiveChatId(currentChatId);
        await fetchChats(); // Refresh sidebar
      }

      await saveMessageToFirestore(user.uid, currentChatId, userMessage);
      
      const responseText = await getChatResponse(textToSend, messages);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: "ai", content: responseText };
      
      setMessages(prev => [...prev, aiMessage]);
      await saveMessageToFirestore(user.uid, currentChatId, aiMessage);
      
    } catch (error: any) {
      console.error(error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), role: "ai", content: `API Error: ${error?.message || "Sorry, I'm having trouble connecting right now. Please try again later."}` };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 overflow-hidden">
      {/* Sidebar - Chat History */}
      <div className="w-80 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <Button onClick={handleNewChat} variant="outline" className="w-full justify-start text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 bg-white dark:bg-slate-900 hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:text-brand-700 dark:hover:text-brand-300">
            <Plus className="mr-2 h-4 w-4" /> New Chat
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!user ? (
            <div className="text-center p-4 text-slate-500 text-sm">
              Sign in to see your chat history.
            </div>
          ) : (
            <>
              {chats.length === 0 ? (
                <div className="text-center p-4 text-slate-500 text-sm">
                  No previous chats.
                </div>
              ) : (
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recent Chats</h3>
                  <div className="space-y-1">
                    {chats.map(chat => (
                      <button 
                        key={chat.id} 
                        onClick={() => setActiveChatId(chat.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors truncate flex items-center gap-2 ${activeChatId === chat.id ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 font-medium border border-slate-200 dark:border-slate-800 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900'}`}
                      >
                        <MessageSquare className={`h-4 w-4 flex-shrink-0 ${activeChatId === chat.id ? 'text-brand-500' : 'text-slate-400'}`} />
                        <span>{chat.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {user && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
              ) : (
                <div className="w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xs">
                  {user.email?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{user.displayName || 'User Settings'}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><MoreHorizontal size={16} /></button>
            </div>
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {!user ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">Sign in to Ask AI</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
              Log in to chat with DealSmart AI. Your chat history will be securely saved and accessible across all your devices.
            </p>
            <Link to="/auth">
              <Button className="h-12 px-8">
                <LogIn className="mr-2 h-5 w-5" /> Sign In / Create Account
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 md:p-8 hide-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8 pb-20">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex-shrink-0 flex items-center justify-center border border-brand-200 dark:border-brand-800">
                        <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                      </div>
                    )}
                    <div className={`max-w-[80%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tr-sm px-5 py-3.5' : 'text-slate-800 dark:text-slate-200 leading-relaxed'}`}>
                      {msg.content}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-medium">
                        You
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex-shrink-0 flex items-center justify-center border border-brand-200 dark:border-brand-800">
                      <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div className="text-slate-800 dark:text-slate-200 flex items-center">
                      <Loader2 className="h-5 w-5 animate-spin text-brand-500 mr-2" /> 
                      <span className="text-slate-500 animate-pulse">Thinking...</span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
                
                {messages.length === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSend(undefined, prompt)}
                        className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-brand-50/50 dark:hover:bg-brand-900/20 transition-colors text-sm text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-brand-400"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white dark:from-slate-950 dark:via-slate-950 to-transparent">
              <div className="max-w-3xl mx-auto">
                <form onSubmit={(e) => handleSend(e)} className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400">
                    <Plus size={20} />
                  </div>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    placeholder="Ask me anything about deals, products, or prices..."
                    className="w-full h-14 pl-12 pr-24 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-base dark:text-slate-100 disabled:opacity-50"
                  />
                  <div className="absolute right-2 flex items-center gap-1">
                    <Button type="button" variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-10 w-10">
                      <Mic size={18} />
                    </Button>
                    <Button 
                      type="submit" 
                      size="icon" 
                      className={`h-10 w-10 rounded-xl transition-colors ${input.trim() && !isLoading ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
                      disabled={!input.trim() || isLoading}
                    >
                      <Send size={18} />
                    </Button>
                  </div>
                </form>
                <p className="text-center text-xs text-slate-400 mt-3">
                  DealSmart AI can make mistakes. Verify important prices on the retailer's site.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
