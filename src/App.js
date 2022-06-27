import Home from "./pages/Home"
import './styles/App.scss';
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import { ContextProvider } from "./context";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditate" element={<Timer />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
