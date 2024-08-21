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
