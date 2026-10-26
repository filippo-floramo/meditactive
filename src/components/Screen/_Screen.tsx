import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { adoptStyles } from "../../helpers";
import cssText from "./_Screen.css?raw";

adoptStyles(cssText);

const variants: Variants = {
  initial: { opacity: 0, y: 16, scale: 0.985, filter: "blur(6px)" },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    // Any filter value makes the screen a backdrop root and flattens the glass blur inside it.
    transitionEnd: { filter: "none" },
    transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    filter: "blur(10px)",
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

/** Props for {@link Screen}. */
export interface ScreenProps {
  name: "home" | "session";
  children: ReactNode;
}

/**
 * Route screen with the blur-and-rise enter and blur-and-fade exit transition.
 * @param props - {@link ScreenProps}
 * @returns Animated screen layer
 */
export function Screen({ name, children }: ScreenProps) {
  return (
    <motion.div
      data-part="screen"
      data-screen={name}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
