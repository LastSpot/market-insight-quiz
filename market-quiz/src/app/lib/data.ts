import { GoogleGenAI } from "@google/genai";

const genai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const model = "gemini-2.5-flash";

export async function generateMarketPrompt() {
    const response = await genai.models.generateContent({
        model: model,
        contents: "Generate a prompt based on the current market conditions, the prompt should be a question that can be answered with a short answer. The prompt should be in the style of a market quiz question.",
    })

    return response.text;
}

export async function rateResponse(aiPrompt: string, userResponse: string) {
    const response = await genai.models.generateContent({
        model: model,
        contents: `Based on this prompt: (${aiPrompt}), and this response: (${userResponse}), give a score out of 100 and explain why the response is correct or incorrect.`,
    })

    return response.text;
}