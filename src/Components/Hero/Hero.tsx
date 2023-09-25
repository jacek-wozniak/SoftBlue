import './Hero.scss';
import Menu from "./Menu/Menu";
import React from "react";
import HeroDecorations from "./HeroDecorations/HeroDecorations";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <Menu />
                <div className="hero__introduce">
                    <p className="hero__top-caption">Hello!</p>
                    <h1 className="hero__header">I am <span className="text-highlight">HRS</span> Pathan<br/>Creative UI/UX Designer</h1>
                    <ol className="hero__services">
                        <li className="hero__services-item">UI/UX Design</li>
                        <li className="hero__services-item">Product Design</li>
                        <li className="hero__services-item">Web Design</li>
                        <li className="hero__services-item">Front-End Design</li>
                    </ol>
                </div>
                <HeroDecorations />
            </div>
        </section>
    )
}

export default Hero;