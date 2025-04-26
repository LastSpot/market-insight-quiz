"use server";

import { rateResponse, setResponse, getFeedback as getStoredFeedback } from "./data";

export async function submitResponse(response: string) {
    setResponse(response);
    return await rateResponse(response);
}

export async function getFeedback() {
    return getStoredFeedback();
}

