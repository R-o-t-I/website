import React from "react";

function useToBottomWindow(ref) {
  const [bottom, setBottom] = React.useState(
    window.innerHeight - (ref?.current?.getBoundingClientRect()?.bottom || 0)
  );

  function changeBottom() {
    if (!ref?.current) return;
    setBottom(window.innerHeight - ref.current.getBoundingClientRect().bottom);
  }

  React.useEffect(() => {
    document.addEventListener("scroll", changeBottom);
    return () => {
      document.removeEventListener("scroll", changeBottom);
    };
  }, []);

  return bottom;
}

export default useToBottomWindow;
