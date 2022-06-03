import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./route/route";

function App() {
  return (
    <div className="App">
      <Router />

      <Toaster
        reverseOrder={false}
        position="top-right"
        containerStyle={{ top: 50 }}
      />
    </div>
  );
}

export default App;
