import ReactGA from "react-ga4";

// Funkce pro inicializaci Google Analytics s vaším Tracking ID
export const initializeGA = (trackingId) => {
  ReactGA.initialize(trackingId);  // Inicializace s Tracking ID (G-TQN22C7RSV)
};

// Funkce pro sledování přechodu na novou stránku
export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

// Funkce pro sledování událostí (například kliknutí na tlačítko nebo jiná akce)
export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
