import React, {Component} from "react";

export default class Overview extends Component {

    render() {
        return(
            <div className="overview">
                <div id="top-bar">
                    <div id="name-overview">ALEXANDRU GHIOCA</div>
                    <div id="contact">
                        <div id="phone-overview">+40 753 420 798</div>
                        <div id="mail-overview">alexghioca27@gmail.com</div>
                        <div id="location-overview">Bucharest</div>
                    </div>
                </div>
                <div id="content">
                    <div id="summary-overview">
                        <div className="overview-title">Summary</div>
                        <div id="summary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                        </div>
                    </div>
                    <div className="overview-title">Educational background</div>
                    <div id="education-overview">
                        <div id="date-overview">2017 - 2021</div>
                        <div id="education-card">
                            <div id="education-institution">Polytechnic University of Bucharest</div>
                            <div id="education-degree">Automotive Engineering</div>
                            
                        </div>
                    </div>
                    <div className="overview-title">Work Experience</div>
                    <div id="experience-overview">
                    
                        <div id="experience-left">
                            <div id="date-overview">2021 - Present</div>
                            <div id="experience-company">HaynesPro</div>
                        </div>

                        <div id="experience-right">
                            <div id="experience-title">Technical Writer</div>
                            <div id="experience-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                               
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}