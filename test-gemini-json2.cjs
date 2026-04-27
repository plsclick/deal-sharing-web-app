const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');

const SYSTEM_INSTRUCTION = `You are an API that returns a raw JSON array of deals. Do NOT wrap the JSON in markdown code blocks. Do NOT add any preamble or explanation. Just return the raw JSON array.
Each deal object MUST have exactly these fields:
- "id": a unique string ID
- "title": Name of the product
- "image": A valid URL to an image. Use generic Unsplash tech images like "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80", "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80"
- "originalPrice": The original price formatted as a string (e.g. "₹54,990")
- "dealPrice": The discounted price formatted as a string (e.g. "₹49,990")
- "discount": The discount percentage string (e.g. "9%")
- "platform": The platform name (e.g. "Amazon", "Flipkart", "Myntra")
- "rating": A string rating (e.g. "4.6")
`;

async function run() {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: SYSTEM_INSTRUCTION,
    });
    console.log("Generating...");
    const result = await model.generateContent(`Generate a JSON array of 3 realistic deals specifically for products matching: "laptops".`);
    const responseText = await result.response.text();
    console.log("RESPONSE:", responseText);
    
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.substring(7);
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.substring(3);
    }
    if (cleanedText.endsWith('```')) {
      cleanedText = cleanedText.substring(0, cleanedText.length - 3);
    }
    
    const deals = JSON.parse(cleanedText);
    console.log("PARSED SUCCESS:", deals.length);
  } catch (e) {
    console.error("ERROR:", e.message);
  }
}
run();
