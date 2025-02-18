// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie"; // Knihovna pro práci s cookies

// const CookiesBanner = ({ onAccept }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Kontrola, jestli uživatel souhlasil s cookies
//     const cookieConsent = Cookies.get("cookie-consent");
//     if (!cookieConsent) {
//       setIsVisible(true); // Pokud neexistuje cookie, banner se zobrazí
//     }
//   }, []);

//   const handleAccept = () => {
//     // Uložení souhlasu do cookies na 365 dní
//     Cookies.set("cookie-consent", "true", { expires: 365 });
//     setIsVisible(false); // Skrýt banner
//     onAccept(); // Volání funkce pro inicializaci GA
//   };

//   if (!isVisible) return null; // Pokud banner není vidět, nic nezobrazíme

//   return (
//     <div style={styles.banner}>
//       <p>Na tomto webu používáme cookies pro zlepšení služby. Pokračováním souhlasíte s jejich používáním.</p>
//       <button className="bg-red-500 text-white p-2 rounded" onClick={handleAccept}>
//   Souhlasím
// </button>
//     </div>
//   );
// };

// // Styling pro banner
// const styles = {
//   banner: {
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     color: "white",
//     padding: "10px",
//     textAlign: "center",
//     zIndex: 9999,
//   },
// };

// export default CookiesBanner;
