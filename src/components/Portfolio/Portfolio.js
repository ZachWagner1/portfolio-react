import React from 'react';

function Portfolio() {
    return (
        <div className="Portfolio">
            <section id="Work" class="work">
                <h2 class="section-title">Work</h2>
                <div class="work-wrapper">
                    <div class="work-container">
                        <div class="work-grid-item run-buddy" onclick='location.href = "https://zachwagner1.github.io/run-buddy/";'>
                            <h3>Run Buddy</h3>
                        </div>

                        <div class="work-grid-item project-one" onclick='location.href = "https://christopherconcannon.github.io/project-one/";'> 
                            <h3>Call It a Night</h3>
                        </div>

                        <div class="work-grid-item project-two" onclick='location.href = "https://github.com/tbreazier/full-stack-project";'>
                            <h3>Simply Social</h3>
                        </div>

                        <div class="work-grid-item work4">
                            <h3>Future Work 4</h3>
                        </div>

                        <div class="work-grid-item work5">
                            <h3>Future Work 5</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default Portfolio;