import "./styles";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import { AppProvider, useApp } from "./context";
import { Stage } from "./components/Stage";
import { Home, Meditate } from "./pages";

const SESSION_PATH = "/meditate";

function Scenes() {
  const location = useLocation();
  const { mode, session } = useApp();
  const home = location.pathname !== SESSION_PATH;
  const progress = session.total > 0 ? Math.min(1, Math.max(0, 1 - session.remaining / session.total)) : 0;

  return (
    <Stage
      scene={home ? "home" : mode}
      mode={mode}
      status={session.status}
      flowing={home || session.status === "running"}
      progress={home ? 0 : progress}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path={SESSION_PATH} element={<Meditate />} />
        </Routes>
      </AnimatePresence>
    </Stage>
  );
}

/**
 * App root: state provider, motion preferences, and the routed stage.
 * @returns App tree; expects to render inside a router
 */
export function App() {
  return (
    <AppProvider>
      <MotionConfig reducedMotion="user">
        <Scenes />
      </MotionConfig>
    </AppProvider>
  );
}
