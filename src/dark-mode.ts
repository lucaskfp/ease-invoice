const rootElement = document.documentElement;

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

darkModeMediaQuery.matches && rootElement.classList.add("dark");

darkModeMediaQuery.addEventListener("change", (e) => {
  const darkModeOn = e.matches;
  if (darkModeOn) return rootElement.classList.add("dark");
  rootElement.classList.remove("dark");
});
