import { GoogleGenAI } from "@google/genai";

const genai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = "gemini-2.0-flash";

const categories = [
    "commodities", "equities", "currencies", "economic indicators",
    "central bank policy", "interest rates", "emerging markets", "ETF flows"
];

const tones = [
    "playful", "serious", "puzzling", "straightforward", "snarky"
];

const formats = [
    "true/false", "short answer", "fill in the blank", "numerical response"
];

const timeframes = [
    "today", "this week", "over the past month", "year-to-date", "since last quarter"
];

const regions = [
    "United States", "Europe", "Asia", "Latin America", "Global markets"
];

function sample(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export async function generateMarketPrompt() {
    const category = sample(categories);
    const tone = sample(tones);
    const format = sample(formats);
    const timeframe = sample(timeframes);
    const region = sample(regions);

    const response = await genai.models.generateContent({
        model: model,
        contents: `
            You're a market quizmaster with a ${tone} tone. 
            Create a single-sentence finance quiz question in ${format} format. 
            Focus on ${category} in the ${region} region, and base it on ${timeframe} market data or sentiment.
            Do not include the answer. No markdown. Keep it concise and engaging.
            Use current market dynamics as context.
        `,
        config: {
            temperature: 0.9,
        },
    })

    return response.text || 'No prompt available';
}

export async function rateResponse(userResponse: string, prompt: string) {
    if (!prompt || !userResponse) {
        return 'No prompt or response provided';
      }

    const response = await genai.models.generateContent({
        model: model,
        contents: 
        `
            Here is a finance question: "${prompt}"

            Here is the user's answer: "${userResponse}"

            Evaluate the response based on the following:
            - Factual accuracy (60 points)
            - Completeness (20 points)
            - Clarity and relevance (20 points)

            Give a final score out of 100.

            Then explain the score using 3–5 concise sentences. Focus only on the logic and quality of the answer.
            If the answer is incomplete or incorrect, explain what is missing or incorrect and suggest a better or more complete response.

            Use a direct, professional tone. Do not use phrases like "Hello", "student", or "I give you a score of". Do not roleplay. Just analyze and score.
            No markdown or formatting, just plain text.
        `,
        config: {
            temperature: 0.2,
            maxOutputTokens: 200,
        },
    })

    return response.text;
}