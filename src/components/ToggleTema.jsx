import { useState, useEffect } from "react";

const ToggleTema = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
    <button>Clic!</button>
      <button onClick={toggleTheme} >
        {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </>
  );
};

export default ToggleTema;
