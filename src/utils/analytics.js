import ReactGA from "react-ga4";

// Inicializace Google Analytics s vaším Tracking ID
const trackingId = "G-TQN22C7RSV"; // Změňte na svůj Google Analytics ID
ReactGA.initialize(trackingId);

// Funkce pro sledování přechodu na novou stránku
export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};