import React from 'react';

function Nav() {
    return (
        <div className="Navigation">
            <nav id="navbar">
            <div className="logo">
					<h2>
						<a href="#home">Zachary Wagner</a>
					</h2>
				</div>
                <ul className="nav-buttons">
                    <li>
                        <a href="#About-Me">About Me</a>
                    </li>
                    <li>
                        <a href="#Work">Work</a>
                    </li>
                    <li>
                        <a href="#Contact-Me">Contact Me</a>
                    </li>
                    <li>
                        <a href="#Resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;