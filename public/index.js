function openLoader() {
  const loader = document.getElementById("loader");
  loader.classList.add("display");
}

openLoader();

function closeLoader() {
  const loader = document.getElementById("loader");
  loader.classList.remove("display");
}

function applyTheme(theme) {
	document.body.classList.remove(...document.body.classList.values());
	document.body.classList.add(`${theme}-theme`);

	const logo = theme === "dark" ? "/logo.png" : "/logo-black.png";
	document.getElementById("alt4-logo").src = logo;
}

async function initializePreferences() {
  const systemLanguage = navigator.language.startsWith("pt")
    ? "pt" : "en";

  const storedTheme = localStorage.getItem("theme") || "light";
  const storedLanguage = localStorage.getItem("language") || systemLanguage;

  await applyTheme(storedTheme);

  //await setLanguage(storedLanguage);
  // document.querySelectorAll(".language-button").forEach((button) => {
  //   button.classList.toggle("active", button.id === `lang-${storedLanguage}`);
  // });

  //await loadTranslations(storedLanguage);
}

const themeSwitchBtn = document.getElementById("themeSwitchBtn");
themeSwitchBtn.addEventListener("click", () => {
	const new_theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
	localStorage.setItem("theme", new_theme);
	applyTheme(new_theme);
});


document.addEventListener("DOMContentLoaded", async function () {
  await initializePreferences();
  closeLoader();
});


