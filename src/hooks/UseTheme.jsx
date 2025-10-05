import { useEffect, useState } from "react";
import { PiMoonLight } from "react-icons/pi";
import { RiSunFill } from "react-icons/ri";

const UseTheme = () => {
    const [theme, setTheme] = useState("light");

    // Load saved theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, []);

    // Toggle theme and save preference
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div>
            <label className="swap swap-rotate cursor-pointer">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <RiSunFill className="swap-on size-6 fill-current" /> {/* sun icon */}
                <PiMoonLight className="swap-off size-6 fill-current" /> {/* moon icon */}
            </label>
        </div>
    );
};

export default UseTheme;
