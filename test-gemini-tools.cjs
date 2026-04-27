const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-latest',
      tools: [{ googleSearch: {} }] 
    });
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage("What is the current price of Sony WH-1000XM5 on amazon today?");
    const response = await result.response;
    console.log(response.text());
  } catch (e) {
    console.error(e.message);
  }
}
run();
