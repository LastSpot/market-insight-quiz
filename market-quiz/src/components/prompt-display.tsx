import { TypingAnimation } from "@/components/magicui/typing-animation"
import { generateMarketPrompt } from "@/lib/data"

export default async function PromptDisplay() {
    const prompt = await generateMarketPrompt();

    return (
        <div className="w-full max-w-[1000px] px-4 sm:px-6 text-wrap m-4 sm:m-8 p-3 sm:p-4 text-shadow-md">
            <TypingAnimation>{prompt || 'Loading prompt...'}</TypingAnimation>
        </div>
    )
}
