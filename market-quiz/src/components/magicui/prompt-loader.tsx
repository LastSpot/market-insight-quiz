"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

interface PromptLoaderProps {
  className?: string;
}

export function PromptLoader({ className }: PromptLoaderProps) {
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-6 text-center",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Spinner size={32} />
      
      <motion.div
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Generating market insight prompt...
      </motion.div>
      
      <motion.div
        className="text-sm text-gray-400 max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Our AI is crafting a challenging finance question just for you
      </motion.div>
    </motion.div>
  );
} 