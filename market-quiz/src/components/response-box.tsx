"use client";

import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { submitResponse } from "@/lib/actions";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Feedback from "@/components/feedback";
import { useRouter } from "next/navigation";

export default function ResponseBox() {
    const [response, setResponse] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [feedbackText, setFeedbackText] = useState<string | null>(null);
    const[isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        setIsLoading(true);
        const result = await submitResponse(response);
        setFeedbackText(result || null);
        setSubmitted(true);
        setIsLoading(false);
    }

    const handleRefresh = async () => {
        setIsLoading(true);
        setSubmitted(false);
        router.push('/')
        setResponse("");
        setFeedbackText(null);
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col w-full max-w-[700px] px-4 sm:px-0 items-center justify-center gap-3 sm:gap-4 m-1 sm:m-2">
            <Textarea 
                className="h-[120px] sm:h-[150px]" 
                value={response} 
                onChange={(e) => setResponse(e.target.value)}
                disabled={isLoading}
                placeholder="Enter your market analysis here..."
            />
            {submitted ? 
                <div className="flex flex-col items-center justify-center">
                    <Feedback feedback={feedbackText} />
                    <InteractiveHoverButton onClick={() => handleRefresh()} disabled={isLoading}>
                        Get a new prompt
                    </InteractiveHoverButton>
                </div> : 
                <InteractiveHoverButton onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Generating..." : "Rate my response"}
                </InteractiveHoverButton>
            }
        </div>
    )
}
