import { ContextProvider } from "./context";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Meditate from "./pages/Meditate";
import './styles/App.scss';

function App() {

  const location = useLocation();

  return (
    <>
      <ContextProvider>
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
