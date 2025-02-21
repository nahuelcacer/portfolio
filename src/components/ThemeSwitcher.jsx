import { useEffect, useState } from "react";
import Moon from "./Moon";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "system";
        }
        return "system";
    });

    useEffect(() => {
        const root = document.documentElement;
        const isDark =
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

        root.classList.toggle("dark", isDark);
    }, [theme]);

    const toggleTheme = (mode) => {
        if (mode === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", mode);
        }
        setTheme(mode);
    };

    return (
        <div className="flex gap-2">

            <button
                onClick={() => toggleTheme("light")}
                className={`p-2 rounded ${theme === "light" ? "bg-gray-300" : ""}`}
            >
                ☀️
            </button>
            <button
                onClick={() => toggleTheme("dark")}
                className={`p-2 rounded ${theme === "dark" ? "bg-gray-700 text-white" : ""}`}
            >
                🌙
            </button>

        </div>
        // <div
        //     className={`w-14 h-7 flex items-center  rounded-full p-1 cursor-pointer transition ${theme === 'ligth' ? 'bg-gray-300' : 'bg-gray-950'} `}

        // >
        //     <div
        //         className={`flex items-center justify-center w-5 h-5 rounded-full shadow-md transform transition ${theme === 'ligth' ? 'translate-x-7 bg-white' : 'translate-x-0 bg-blue-800'}`}

        //     >
        //         {theme === 'ligth' ? '🌞' : <Moon size={12} />}
        //     </div>
        // </div>
    );
}
