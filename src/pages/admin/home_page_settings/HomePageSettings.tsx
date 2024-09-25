import { HPSCPageProvider } from "../../../features";
import { HPSLayouts } from "./components";
const HomePageSettings = () => {
  return (
    <HPSCPageProvider>
      <HPSLayouts/>
    </HPSCPageProvider>
  );
};

export default HomePageSettings;
