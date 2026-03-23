import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
   defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "assignment-summarizer"
   }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter text: ", async (text) => {
  if (!text.trim()) {
    console.log("Text is required");
    rl.close();
    return;
  }

  try {
    const prompt = `
You are an assistant that extracts structured information.

Return ONLY JSON:
{
 "summary": "one sentence",
 "keyPoints": ["point1", "point2", "point3"],
 "sentiment": "positive | neutral | negative"
}

Rules:
- summary must be one sentence
- keyPoints must be exactly 3
- sentiment must be one of the allowed values
- no extra text

Text:
${text}
`;

    const response = await client.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const output = JSON.parse(response.choices[0].message.content);

    console.log("\nSummary:");
    console.log(output.summary);

    console.log("\nKey Points:");
    output.keyPoints.forEach((p, i) => {
      console.log(`${i + 1}. ${p}`);
    });

    console.log("\nSentiment:");
    console.log(output.sentiment);

  } catch (err) {
    console.log("Error:", err.message);
  }

  rl.close();
});