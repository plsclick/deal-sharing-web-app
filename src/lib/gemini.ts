import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const genAI = new GoogleGenerativeAI(apiKey || 'dummy_key_if_not_set');

const SYSTEM_INSTRUCTION = `You are DealSmart AI, a highly knowledgeable, helpful, and friendly shopping assistant. 
Your goal is to help users find the best deals, compare products, understand price trends, and make informed purchasing decisions.
Keep your answers concise, structured (use bullet points or bold text for emphasis), and focused on saving the user money.
If the user asks for a specific product, simulate finding the best current prices across platforms like Amazon, Flipkart, etc., and give them a recommendation.`;

export async function getChatResponse(message: string, history: any[] = []): Promise<string> {
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not set. Returning mock response.");
    return new Promise(resolve => setTimeout(() => resolve("Please set your Gemini API Key in the .env file to chat with me!"), 1000));
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    let rawHistory = history.map((msg: any) => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Gemini API requires strict alternating history starting with 'user'
    let formattedHistory = [];
    let expectedRole = 'user';
    
    for (const msg of rawHistory) {
      // Find the next message that matches the expected role
      if (msg.role === expectedRole) {
        formattedHistory.push(msg);
        expectedRole = expectedRole === 'user' ? 'model' : 'user';
      }
    }

    try {
      const chat = model.startChat({
        history: formattedHistory,
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (primaryError: any) {
      // Fallback to older model if the primary model is experiencing high demand (503)
      if (primaryError?.message?.includes("503") || primaryError?.message?.includes("high demand")) {
        console.warn("Gemini 2.5 is busy. Falling back to Gemini Flash Latest...");
        const fallbackModel = genAI.getGenerativeModel({
          model: 'gemini-flash-latest',
          systemInstruction: SYSTEM_INSTRUCTION,
        });
        
        const fallbackChat = fallbackModel.startChat({
          history: formattedHistory,
        });

        const fallbackResult = await fallbackChat.sendMessage(message);
        const fallbackResponse = await fallbackResult.response;
        return fallbackResponse.text();
      }
      throw primaryError;
    }
  } catch (error: any) {
    console.error("Error communicating with Gemini API:", error);
    // Return a more specific error so we know what's failing
    throw new Error(error?.message || "Unknown API Error");
  }
}
