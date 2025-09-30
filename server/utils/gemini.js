import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  if (!prompt) throw new Error("Prompt is required");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }], // must be an array of parts
      },
    ],
  });

  return response.candidates[0].content.parts[0].text;
}

export default main;
