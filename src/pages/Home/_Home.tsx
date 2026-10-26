import { useNavigate } from "react-router";
import { useApp } from "../../context";
import type { Mode } from "../../context";
import { Logo } from "../../components/Logo";
import { ModeCard } from "../../components/ModeCard";
import { Screen } from "../../components/Screen";
import { adoptStyles } from "../../helpers";
import cssText from "./_Home.css?raw";

adoptStyles(cssText);

/**
 * Home screen: pick Light or Deep, then go to the session.
 * @returns Home screen
 */
export function Home() {
  const navigate = useNavigate();
  const { setMode } = useApp();

  const begin = (mode: Mode) => {
    setMode(mode);
    navigate("/meditate");
  };

  return (
    <Screen name="home">
      <header data-part="brand">
        <Logo />
        <p data-part="brand-name">Meditactive</p>
      </header>
      <main data-part="intro">
        <h1>Hello. How would you like your session to be?</h1>
        <p data-part="lead">Choose a mode. You'll set the timer on the next screen.</p>
        <ul data-part="modes">
          <li>
            <ModeCard
              mode="light"
              title="Light"
              description="Bright, airy tones for a gentle reset between tasks."
              onSelect={begin}
            />
          </li>
          <li>
            <ModeCard
              mode="deep"
              title="Deep"
              description="Low, slow tones for longer, quieter sits."
              onSelect={begin}
            />
          </li>
        </ul>
      </main>
    </Screen>
  );
}
