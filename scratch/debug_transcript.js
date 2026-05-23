const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\Palwasha Ali\\.gemini\\antigravity\\brain\\93c94dcc-eafc-416a-9eda-30a001fdfe66\\.system_generated\\logs\\transcript.jsonl';

async function processTranscript() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let userInputs = [];

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      if (parsed.type === 'USER_INPUT' && parsed.content) {
        userInputs.push(parsed.content);
      }
    } catch(e) {}
  }

  const lastUserInput = userInputs[userInputs.length - 1];
  console.log("Last USER_INPUT length:", lastUserInput.length);
  console.log("Starts with:", lastUserInput.substring(0, 100));
  
  const match = lastUserInput.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
  if (match) {
    console.log("Found match. Length:", match[1].length);
  } else {
    console.log("No match found for <USER_REQUEST>!");
    // check if it uses different tag
    console.log(lastUserInput.substring(lastUserInput.length - 100));
  }
}

processTranscript().catch(console.error);
