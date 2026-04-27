const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');

async function run() {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyCLxvCNkOv-7hnzSnnd_pTfHCA_SEv3Zks');
  const data = await response.json();
  console.log(data.models.map(m => m.name).join('\n'));
}
run();
