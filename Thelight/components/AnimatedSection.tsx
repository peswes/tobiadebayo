'use client';

import { motion } from 'framer-motion';

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  yOffset = 30,
  xOffset = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, type: "spring", damping: 25, stiffness: 200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 200 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
