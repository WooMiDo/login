import logo from "./logo.svg";
import "./App.css";
import { SendDataContextProvider } from "./context/sendDataContext";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
