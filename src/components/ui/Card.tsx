"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = true, className = "", ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className={`bg-card border border-border rounded-2xl p-6 transition-all duration-300 ${
        hover ? "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
