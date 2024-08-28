import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export const SetHeightComp = ({ children }: { children: ReactNode }) => {
  const [divHeight, setDivHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const updateDivHeight = useCallback(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateDivHeight();
    const resizeObserver = new ResizeObserver(updateDivHeight);
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, [updateDivHeight]);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight / 10;
      setDivHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log({ divHeight });

  return (
    <Box sx={{ width: 1, paddingBottom: `${divHeight}px` }}>
      <Box sx={{ position: "fixed", zIndex: 100, width: 1 }}>
        <Box ref={divRef}>{children}</Box>
      </Box>
    </Box>
  );
};
