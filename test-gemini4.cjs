const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const chat = model.startChat({ 
      history: [
        { role: 'user', parts: [{text: 'hello'}] },
        { role: 'model', parts: [{text: 'API Error: 503'}] },
        { role: 'model', parts: [{text: 'Wait, a second model message?'}] }
      ] 
    });
    const result = await chat.sendMessage("help");
    const response = await result.response;
    console.log(response.text());
  } catch (e) {
    console.error("ERROR:", e.message);
  }
}
run();
