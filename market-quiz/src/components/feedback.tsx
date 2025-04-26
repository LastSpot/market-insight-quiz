import { TypingAnimation } from "./magicui/typing-animation";

interface FeedbackProps {
  feedback: string | null;
}

export default function Feedback({ feedback }: FeedbackProps) {
    return (
        <div className="flex flex-col items-center justify-center m-2 sm:m-4">
            <TypingAnimation className="text-base font-semibold sm:text-xl text-wrap w-full max-w-[1000px] px-2 sm:px-0 font-mono">
                {feedback || 'Loading feedback...'}
            </TypingAnimation>
        </div>
    )
}
