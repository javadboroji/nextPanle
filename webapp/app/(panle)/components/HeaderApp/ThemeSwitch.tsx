"use client"
import { Switch } from 'antd';
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        }
    }, []);
    const onChange = (checked: boolean) => {
        const newTheme = checked ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");

    };



    return (
        <Switch defaultChecked onChange={onChange} checked={theme === "light" ? false : true} />
    )
}

export default ThemeSwitch