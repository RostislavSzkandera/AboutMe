import { useState, useEffect } from "react";
import ReactGA from "react-ga4"; // Import GA4
import Cookies from "js-cookie"; // Knihovna pro práci s cookies

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { trackPageView } from "./utils/analytics"; // Import trackování

import { FaArrowCircleUp } from "react-icons/fa";

// Komponenta pro cookies banner
const CookiesBanner = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kontrola, jestli uživatel souhlasil s cookies
    const cookieConsent = Cookies.get("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true); // Pokud neexistuje cookie, banner se zobrazí
    }
  }, []);

  const handleAccept = () => {
    // Uložení souhlasu do cookies na 365 dní
    Cookies.set("cookie-consent", "true", { expires: 365 });
    setIsVisible(false); // Skrýt banner
    onAccept(); // Volání funkce pro inicializaci GA
  };

  if (!isVisible) return null; // Pokud banner není vidět, nic nezobrazíme

  return (
    <div style={styles.banner}>
      <p>Na tomto webu používáme cookies pro zlepšení služby. Pokračováním souhlasíte s jejich používáním.</p>
      <button onClick={handleAccept}>Souhlasím</button>
    </div>
  );
};

// Styling pro banner
const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    zIndex: 9999,
  },
};

const App = () => {
  const [visible, setVisible] = useState(false);

  // Funkce pro inicializaci Google Analytics
  const initializeGA = () => {
    const trackingId = "G-TQN22C7RSV"; // Změňte na svůj Google Analytics ID
    ReactGA.initialize(trackingId); // Inicializace Google Analytics
  };

  useEffect(() => {
    trackPageView(window.location.pathname); // Sleduje načtení stránky
  }, []);

  // Funkce pro scroll na začátek stránky
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  // Funkce pro odeslání e-mailu
  const onEmailClick = () => {
    window.open("mailto:szkandera.r@seznam.cz?subject=SendMail&body=Description");
  };

  return (
    <div className="overflow-hidden">
      <CookiesBanner onAccept={initializeGA} /> {/* Přidání cookies banneru */}
      
      <div>
        {visible && (
          <button className="fixed right-5 bottom-5 z-40" onClick={scrollToTop}>
            <FaArrowCircleUp className="text-[40px] text-gray-700" />
          </button>
        )}
      </div>

      <div>
        <Header onEmailClick={onEmailClick} />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Footer onEmailClick={onEmailClick} />
      </div>
    </div>
  );
};

export default App;
