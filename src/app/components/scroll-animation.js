'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ScrollAnimatedContainer({ children, initial, animate, transition, options, className }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    ...options, // Allow overriding default options
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      className={className}    >
      {children}
    </motion.div>
  );
}

// Set default animation values if not provided
ScrollAnimatedContainer.defaultProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  options: {},
};

