export const isBrowser = () => {
  return typeof window !== `undefined`;
};

export const preserveChoice = ({ advanced = false }) => {
  if (isBrowser()) {
    const choice = JSON.stringify(advanced);
    window.localStorage.setItem("elcgh-preference", choice);
  }
};

export const getPreservedChoice = () => {
  if (isBrowser()) {
    const choice = JSON.parse(window.localStorage.getItem("elcgh-preference"));
    if (choice) {
      return choice.advanced;
    }
    return false;
  }
};
