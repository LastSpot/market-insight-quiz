"use server";

import { generateMarketPrompt, rateResponse } from "./data";

export async function getGeneratedPrompt() {
    return await generateMarketPrompt();
}

export async function rateUserResponse(userResponse: string, prompt: string) {
    return await rateResponse(userResponse, prompt);
}
