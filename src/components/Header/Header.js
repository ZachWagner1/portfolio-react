import React from 'react';
import Navigation from '../Nav/Nav';

function Header() {
    return (
        <div className="Header">
            <Navigation />
            <section class="hero">
                <div>
                    <img id="bio-image"
                        src="./assets/images/BioPic.png" alt="Zachary Wagner" />
                </div>
            </section>
        </div>

    )
}

export default Header;