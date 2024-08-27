// Animations for the modal
export const modalAnimation = () => ({
  initial: { x: "100%", opacity: 0.75 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
  transition: { duration: 0.3 },
});

// Animations for the text inside the modal
export const textAnimation = (delay) => ({
  initial: { opacity: 0, x: -25 },
  animate: { opacity: 1, x: 0 },
  transition: {
    delay: 0.15 + delay / 10,
  },
});

export const buttonAnimation = (delay, idx) => ({
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    delay: 0.2 + idx / 5,
  },
});
