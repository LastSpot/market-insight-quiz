import { TypingAnimation } from "@/components/magicui/typing-animation"
import { generateMarketPrompt } from "@/lib/data"

export default async function PromptDisplay() {
    const prompt = await generateMarketPrompt();

    return (
        <div className="w-[1000px] text-wrap m-8 p-4 text-shadow-md">
            <TypingAnimation className="">{prompt || 'Loading prompt...'}</TypingAnimation>
        </div>
    )
}
