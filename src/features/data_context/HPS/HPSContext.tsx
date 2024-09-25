import React, { createContext } from "react";
export type hPSCPageT = "configCat"|'manageCat';

interface HPSCPageContextType {
  hPSCPage: hPSCPageT;
  setHPSCPage: React.Dispatch<React.SetStateAction<hPSCPageT>>;
}
const HPSCPageContext = createContext<HPSCPageContextType>({
  hPSCPage: "configCat",
  setHPSCPage: function (_value: React.SetStateAction<hPSCPageT>): void {
    throw new Error("Function not implemented.");
  },
});

export default HPSCPageContext;
