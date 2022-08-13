import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Meditate from "./pages/Meditate";
import { ContextProvider } from "./context";
import { Routes, Route, useLocation } from "react-router-dom";
import './styles/App.scss';
import { AnimatePresence } from "framer-motion"

function App() {

  const location = useLocation();

  return (
    <>
      <ContextProvider>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/meditate" element={<Meditate />} />
          </Routes>
        </AnimatePresence>
      </ContextProvider>
    </>
  );
}

export default App;
