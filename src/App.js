import { useState, useEffect } from "react";

// import Cookies from "js-cookie"; // Knihovna pro práci s cookies

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// import { initializeGA, trackPageView } from "./utils/analytics"; // Import trackování

import { FaArrowCircleUp } from "react-icons/fa";

// Komponenta pro cookies banner
// const CookiesBanner = ({ onAccept, onReject }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDarkened, setIsDarkened] = useState(true); // Stav pro ztmavení obrazovky

  // useEffect(() => {
  //   // Kontrola, jestli uživatel souhlasil s cookies
  //   const cookieConsent = Cookies.get("cookie-consent");
  //   if (!cookieConsent) {
  //     setIsVisible(true); // Pokud neexistuje cookie, banner se zobrazí
  //   }
  // }, []);

  // const handleAccept = () => {
  //   // Uložení souhlasu do cookies na 365 dní
  //   Cookies.set("cookie-consent", "true", { expires: 365 });
  //   setIsVisible(false); // Skrýt banner
  //   setIsDarkened(false); // Zrušení ztmavení obrazovky
  //   onAccept(); // Volání funkce pro inicializaci GA
  // };

  // const handleReject = () => {
  //   // Uložení odmítnutí do cookies na 365 dní (nebudou sbírány cookies)
  //   Cookies.set("cookie-consent", "false", { expires: 365 });
  //   setIsVisible(false); // Skrýt banner
  //   setIsDarkened(false); // Zrušení ztmavení obrazovky
  //   onReject(); // Pokud odmítnete, GA nebude inicializováno
  // };

  // if (!isVisible) return null; // Pokud banner není vidět, nic nezobrazíme

//   return (
//     <div>
//       {/* Ztmavení obrazovky */}
//       {isDarkened && <div style={styles.overlay}></div>}

//       <div style={styles.banner}>
//         <p>Na tomto webu používáme cookies pro zlepšení služby. Pokračováním souhlasíte s jejich používáním.</p>

//         {/* Tlačítka pro souhlas a odmítnutí */}
//         <div>
//           <button className="bg-red-500 text-white p-2 rounded mr-4" onClick={handleAccept}>
//             Souhlasím
//           </button>
//           <button className="bg-red-500 text-white p-2 rounded" onClick={handleReject}>
//             Odmítnout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styling pro banner a overlay
// const styles = {
//   banner: {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     color: "white",
//     padding: "20px",
//     textAlign: "center",
//     zIndex: 9999,
//     borderRadius: "10px",
//     width: "80%",
//     maxWidth: "400px",
//   },
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Mírně tmavší pozadí
//     zIndex: 9998,
//   },
// };

const App = () => {
  const [visible, setVisible] = useState(false);
// const [isConsentGiven, setIsConsentGiven] = useState(false); // Stav pro   souhlas s cookies

  // Funkce pro inicializaci Google Analytics
  // const initializeAnalytics = () => {
  //   const trackingId = "G-TQN22C7RSV"; // Změňte na své vlastní ID
  //   initializeGA(trackingId); // Inicializace Google Analytics
  //   trackPageView(window.location.pathname); // Sleduje načtení stránky pouze při souhlasu
  // };

  // Funkce pro nenačítání Google Analytics při odmítnutí
  // const rejectGA = () => {
  //   console.log("Google Analytics nebylo načteno.");
  // };

  // Efekt pro spuštění Google Analytics pouze po souhlasu
  // useEffect(() => {
  //   // Kontrola, jestli již byl souhlas s cookies udělen
  //   const cookieConsent = Cookies.get("cookie-consent");
  //   if (cookieConsent === "true") {
  //     setIsConsentGiven(true); // Pokud uživatel souhlasil
  //   }
  // }, []);

  // Aktivace Google Analytics pouze po souhlasu
  // useEffect(() => {
  //   if (isConsentGiven) {

  //   }
  // }, [isConsentGiven]);

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
      {/* <CookiesBanner onAccept={() => setIsConsentGiven(true)} onReject={rejectGA} /> Přidání cookies banneru */}

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
