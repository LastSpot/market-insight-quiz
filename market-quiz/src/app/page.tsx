import Image from "next/image";
import PromptDisplay from "@/components/prompt-display";
import ResponseBox from "@/components/response-box";
import Feedback from "@/components/feedback";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <Suspense fallback={
              <div>Generating prompt...</div>
            }>
            <PromptDisplay />
          </Suspense>
          <ResponseBox />
          <Feedback />
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        <p className="font-bold">Footer</p>
      </footer>
    </div>
  );
}
