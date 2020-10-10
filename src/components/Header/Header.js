import React from 'react';
import Navigation from '../Nav/Nav';

function Header() {
    return (
        <header className="Header">
            <Navigation />
            <section class="hero">
                <div>
                    <img id="bio-image"
                        src={require("../../assets/images/BioPic.png")} alt="Zachary Wagner" />
                </div>
            </section>
        </header>

    )
}

export default Header;