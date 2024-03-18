// https://lukelowrey.com/css-variable-theme-switcher/
const themeButtonEl = document.querySelector("[data-theme-toggle]")
let storedTheme = localStorage.getItem("theme")|| (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
if (storedTheme){
    updateThemeButton({ buttonEl: themeButtonEl, isDark: storedTheme === "dark" })
    document.querySelector("html").setAttribute("data-theme", storedTheme)
}

themeButtonEl.addEventListener("click", function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = (currentTheme === "dark") ? "light" : "dark"
    updateThemeButton({ buttonEl: themeButtonEl, isDark: targetTheme === "dark" })
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem("theme", targetTheme)
})
// /**
// * The Ultimate Theme Toggle
// * https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f
// */

// const themeButtonEl = document.querySelector("[data-theme-toggle]");
// const localStorageTheme = localStorage.getItem("theme");
// const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// /**
// * Calculate theme setting on page load
// * Update the theme setting and button text accoridng to current settings
// */
// let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
// updateThemeButton({ buttonEl: themeButtonEl, isDark: currentThemeSetting === "dark" });
// updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
// /**
// * Add an event listener to toggle the theme
// */
// themeButtonEl.addEventListener("click", (event) => {
//     const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
//     localStorage.setItem("theme", newTheme);
//     updateThemeButton({ buttonEl: themeButtonEl, isDark: newTheme === "dark" });
//     updateThemeOnHtmlEl({ theme: newTheme });
//     currentThemeSetting = newTheme;
// }); 

// /**
// * Utility function to calculate the current theme setting.
// * Look for a local storage value.
// * Fall back to system setting.
// * Fall back to light mode.
// */
// function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
//     if (localStorageTheme !== null) {
//         return localStorageTheme;
//     }
//     if (systemSettingDark.matches) {
//         return "dark";
//     }
//     return "light";
// }
  
/**
* Utility function to update the button text and aria-label.
*/
function updateThemeButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Toggle light theme" : "Toggle dark theme";
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
}
  
// /**
// * Utility function to update the theme setting on the html tag
// */
// function updateThemeOnHtmlEl({ theme }) {
//     document.querySelector("html").setAttribute("data-theme", theme);
// }
