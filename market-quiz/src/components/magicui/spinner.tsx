"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SpinnerProps {
  size?: number;
  className?: string;
  color?: string;
}

export function Spinner({ 
  size = 24, 
  className, 
  color = "currentColor" 
}: SpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className="rounded-full border-2 border-t-transparent"
        style={{ 
          width: size, 
          height: size, 
          borderColor: color,
          borderTopColor: 'transparent'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
} 