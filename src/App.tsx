import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import { SnackbarProvider } from "./hooks";



function App() {
 

  return (
    <div className="App">
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </div>
  );
}

export default App;
