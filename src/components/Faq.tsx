import react, { useState } from "react";
import { Icon } from "./Icon";
import { AnimatePresence, motion } from "framer-motion";

interface FaqProps {
  defaultOpen?: boolean;
  question: string;
  children: React.ReactNode;
}

const Faq = ({ defaultOpen = false, children, question }: FaqProps) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(defaultOpen);

  return (
    <div>
      <div className="relative flex items-center">
      <div className="font-display text-[42px] text-cloudy absolute left-0 -top-5">q</div>
      <button onClick={ () => {setIsAnswerShowing(prevValue => !prevValue)}} className="pl-12 flex items-center justify-between gap-4 w-full">
        <div className="text-lg flex-1 text-left">{question}</div>
          <motion.div
            animate={{ rotate: isAnswerShowing ? 180 : 0 }}
            className="ml-2 text-dustyGray"
          ><Icon id="chevronDown" /></motion.div>
      </button>
      </div>
      <AnimatePresence>
        {isAnswerShowing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="faq__answer pl-12 pt-2 text-base text-deluge"
          >{children}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Faq };
