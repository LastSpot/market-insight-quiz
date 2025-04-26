"use client";

import { useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { PromptLoader } from "@/components/magicui/prompt-loader";
import { getGeneratedPrompt, rateUserResponse } from "@/lib/actions";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);

  const generatePrompt = async () => {
    setIsLoading(true);
    setIsGeneratingPrompt(true);
    setPrompt(""); // Clear prompt to show loading animation
    
    try {
      const newPrompt = await getGeneratedPrompt();
      setPrompt(newPrompt);
      setResponse("");
      setFeedback("");
      setIsSubmitted(false);
    } catch (error) {
      console.error("Error generating prompt:", error);
    } finally {
      setIsLoading(false);
      setIsGeneratingPrompt(false);
    }
  };

  const handleSubmit = async () => {
    if (!response.trim()) return;
    
    setIsLoading(true);
    try {
      const feedbackResult = await rateUserResponse(response, prompt);
      setFeedback(feedbackResult || "No feedback available");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error getting feedback:", error);
      setFeedback("Error generating feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Meteors positioned absolutely to not affect layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Meteors number={15} />
      </div>
      
      <main className="flex-grow py-4 sm:py-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[90vh] w-full gap-6">
          {/* Prompt Display Area */}
          <div className="w-fit max-w-[1000px] sm:px-6 text-wrap m-4 sm:m-8 p-3 sm:p-4 text-shadow-md rounded-lg">
            {isGeneratingPrompt ? (
              <PromptLoader />
            ) : prompt ? (
              <TypingAnimation className="text-wrap items-center justify-center">{prompt}</TypingAnimation>
            ) : (
              <InteractiveHoverButton onClick={generatePrompt} disabled={isLoading}>
                {isLoading ? "Generating..." : "Generate Prompt"}
              </InteractiveHoverButton>
            )}
          </div>

          {/* User Response Area */}
          {prompt && !isSubmitted && !isGeneratingPrompt && (
            <div className="flex flex-col w-full max-w-[700px] px-4 sm:px-0 items-center justify-center gap-3 sm:gap-4">
              <Textarea
                className="h-[120px] sm:h-[150px]"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                disabled={isLoading}
                placeholder="Enter your market analysis here..."
              />
              <InteractiveHoverButton 
                onClick={handleSubmit} 
                disabled={isLoading || !response.trim()}
                className="w-fit max-w-[300px]"
              >
                {isLoading ? "Analyzing..." : "Submit Response"}
              </InteractiveHoverButton>
            </div>
          )}

          {/* Feedback Area */}
          {isSubmitted && feedback && !isGeneratingPrompt && (
            <div className="w-full max-w-[700px] px-4 sm:px-0">
              <div className="p-4 rounded-lg">
                <TypingAnimation className="font-semibold text-wrap text-2xl">{feedback}</TypingAnimation>
              </div>
              <div className="flex justify-center mt-4">
                <InteractiveHoverButton onClick={generatePrompt} disabled={isLoading}>
                  Get New Prompt
                </InteractiveHoverButton>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="flex flex-col py-4 text-center text-xs text-gray-500 relative z-10">
        <p className="m-auto">Market Insight Quiz © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
