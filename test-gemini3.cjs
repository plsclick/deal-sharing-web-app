const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const chat = model.startChat({ 
      history: [
        { role: 'model', parts: [{text: 'First'}] }
      ] 
    });
    const result = await chat.sendMessage("help");
    const response = await result.response;
    console.log(response.text());
  } catch (e) {
    console.error(e.message);
  }
}
run();
