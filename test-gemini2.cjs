const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
    const chat = model.startChat({ 
      history: [] 
    });
    const result = await chat.sendMessage("hello");
    const response = await result.response;
    console.log(response.text());
  } catch (e) {
    console.error(e.message);
  }
}
run();
