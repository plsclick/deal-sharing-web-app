const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-latest',
      systemInstruction: "You are an API that returns a JSON array of 5 current live deals on tech products. Each object must have: title, image (unsplash url), originalPrice, dealPrice, discount, platform, rating. Return ONLY raw JSON."
    });
    const result = await model.generateContent("Get me deals");
    console.log(result.response.text());
  } catch (e) {
    console.error(e.message);
  }
}
run();
