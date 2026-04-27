import { genAI } from './gemini';

export interface Deal {
  id: string;
  title: string;
  originalPrice: string;
  dealPrice: string;
  discount: string;
  platform: string;
  rating: string;
}

const SYSTEM_INSTRUCTION = `You are an API that returns a raw JSON array of deals. Do NOT wrap the JSON in markdown code blocks. Do NOT add any preamble or explanation. Just return the raw JSON array.
Each deal object MUST have exactly these fields:
- "id": a unique string ID
- "title": Name of the product
- "originalPrice": The original price formatted as a string (e.g. "₹54,990")
- "dealPrice": The discounted price formatted as a string (e.g. "₹49,990")
- "discount": The discount percentage string (e.g. "9%")
- "platform": The platform name (e.g. "Amazon", "Flipkart", "Myntra")
- "rating": A string rating (e.g. "4.6")
`;

export async function fetchDealsFromGemini(count: number = 6, searchQuery: string = "", retries: number = 2): Promise<Deal[]> {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-lite-latest',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const prompt = searchQuery
      ? `Generate a JSON array of ${count} realistic deals specifically for products matching: "${searchQuery}".`
      : `Generate a JSON array of ${count} realistic tech or fashion deals.`;

    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // Clean up potential markdown formatting if Gemini still includes it
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.substring(7);
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.substring(3);
    }
    if (cleanedText.endsWith('```')) {
      cleanedText = cleanedText.substring(0, cleanedText.length - 3);
    }

    const deals: Deal[] = JSON.parse(cleanedText);
    return deals;
  } catch (error: any) {
    if (retries > 0) {
      console.warn(`Gemini generation failed, retrying... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, 1500)); // wait 1.5s before retry
      return fetchDealsFromGemini(count, searchQuery, retries - 1);
    }
    console.error("Error fetching deals from Gemini:", error);
    throw new Error(error?.message || "Failed to generate AI deals");
  }
}
