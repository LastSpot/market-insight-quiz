// import Image from "next/image";
import PromptDisplay from "@/components/prompt-display";
import ResponseBox from "@/components/response-box";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-4 sm:py-8">
        <div className="flex flex-col items-center justify-center min-h-[90vh] w-full overflow-x-hidden">
          <Suspense fallback={
              <div className="text-center py-4 animate-pulse font-bold text-4xl">Generating prompt...</div>
            }>
            <PromptDisplay />
          </Suspense>
          <ResponseBox />
        </div>
      </main>
      <footer className="py-4 text-center text-xs text-gray-500">
        <p>Market Insight Quiz © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
