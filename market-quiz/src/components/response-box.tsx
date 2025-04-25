"use client";

import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { submitResponse } from "@/lib/actions";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function ResponseBox() {
    const [response, setResponse] = useState("");

    return (
        <div className="flex flex-col w-[700px] items-center justify-center gap-4 m-2">
            <Textarea 
                className="h-[200px]" 
                value={response} 
                onChange={(e) => setResponse(e.target.value)} 
            />
            <InteractiveHoverButton onClick={() => submitResponse(response)}>Rate my response</InteractiveHoverButton>
        </div>
    )
}
