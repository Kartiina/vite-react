import React from "react";
import Info from "./components/info";
import About from "./components/about"
import Interests from "./components/interests";
import Social from "./components/socials";

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Social />
        </div>
    )
}