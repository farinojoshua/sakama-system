"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  children,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary-50 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
