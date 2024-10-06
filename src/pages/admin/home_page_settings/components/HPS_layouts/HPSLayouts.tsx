import HPSCPageContext from "../../../../../features/data_context/HPS/HPSContext";
import { HPSConfigComp } from "../HPS_config/HPSConfigComp";
import { ManageCategories } from "../manage_categories";
import { HPSHeader } from "../HPS_header";
import { useContext } from "react";

export const HPSLayouts = () => {
  const { hPSCPage: page } = useContext(HPSCPageContext);
  const renderComponent = () => {
    switch (page) {
      case "configCat":
        return <HPSConfigComp />;
      case "manageCat":
        return <ManageCategories />;
      default:
        return <HPSConfigComp />;
    }
  };
  return (
    <>
      <HPSHeader />
      {renderComponent()}
    </>
  );
};
