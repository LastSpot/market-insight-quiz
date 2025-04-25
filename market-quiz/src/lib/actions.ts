"use server";

import { rateResponse, setResponse, getResponse } from "./data";

export async function submitResponse(response: string) {
    setResponse(response);
    return await rateResponse(response);
}

export async function getFeedback() {
    return getResponse();
}

