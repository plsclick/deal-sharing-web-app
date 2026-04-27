const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
async function run() {
  const models = ['gemini-2.0-flash-lite', 'gemini-flash-lite-latest', 'gemini-pro-latest'];
  for (const m of models) {
    try {
      console.log('Testing', m);
      const model = genAI.getGenerativeModel({ model: m });
      const chat = model.startChat({ history: [] });
      const result = await chat.sendMessage("hello");
      const response = await result.response;
      console.log('SUCCESS:', m);
    } catch (e) {
      console.error('ERROR', m, ':', e.message.split('\n')[0]);
    }
  }
}
run();
