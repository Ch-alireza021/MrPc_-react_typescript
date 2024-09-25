import { ReactNode, useState } from "react";
import HPSCPageContext, { hPSCPageT } from "./HPSContext";

export const HPSCPageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [hPSCPage, setHPSCPage] = useState<hPSCPageT>("configCat");

  return (
    <HPSCPageContext.Provider value={{ hPSCPage, setHPSCPage }}>
      {children}
    </HPSCPageContext.Provider>
  );
};
