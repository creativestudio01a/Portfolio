import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn } from "./shared";

type SectionIntroProps = {
  inverted?: boolean;
  kicker: string;
  text: string;
  title: string;
};

export function SectionIntro({ inverted = false, kicker, text, title }: SectionIntroProps) {
  return (
    <motion.div {...fadeIn} className={cn("section-intro", inverted && "section-intro-inverted")}>
      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
      </div>
      <span>{text}</span>
    </motion.div>
  );
}
