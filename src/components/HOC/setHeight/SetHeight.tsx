import React, { ReactNode, useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

interface SetHeightProps {
  children: ReactNode;
}

export const SetHeight: React.FC<SetHeightProps> = ({ children }) => {
  const [divHeight, setDivHeight] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (divRef.current) {
        setDivHeight(divRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }
    updateHeight();

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, [divRef.current ? divRef.current.offsetHeight : ""]);

  console.log({ divHeight });

  return (
    <Box sx={{ width: 1, paddingBottom: `${divHeight}px` }}>
      <Box sx={{width: 1,height:`${divHeight}px`}}>
      {/* <Box sx={{ position: "fixed", zIndex: 100, width: 1 }}> */}
        <Box ref={divRef}>{children}</Box>
      </Box>
    </Box>
  );
};
