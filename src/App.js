import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Meditate from "./pages/Meditate";
import { ContextProvider } from "./context";
import { Routes, Route } from "react-router-dom";
import './styles/App.scss';

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditate" element={<Meditate />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
