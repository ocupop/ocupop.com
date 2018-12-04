import WebFont from "webfontloader";
import Cookies from "js-cookie";

let visitorCookieConsent = Cookies.get("ocupop");
// Cookies.set("consent", { consent: true });

console.log(visitorCookieConsent);

// if (!visitorStatus) {
//   console.log("First Time Visitor to Ocupop");
//   const visitorStatus = true;
//   Cookies.set("ocupop", { consent: true });
// } else {
//   console.log("Visitor Status:", visitorStatus);
// }

WebFont.load({
  typekit: { id: "wzw6yzl" },
  loading: function() {
    window.console.log("LOADING FONTS");
  },
  active: function() {
    window.console.log("ACTIVE FONTS");
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});
