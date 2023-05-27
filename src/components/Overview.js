import React, {Component} from "react";

export default class Overview extends Component {

    render() {

        const { general, educational, experience } = this.props;

        return(
            <div className="overview">
                <div id="top-bar">
                    <div id="name-overview">{general.firstName} {general. lastName}</div>
                    <div id="contact">
                        <div id="phone-overview">{general.tel}</div>
                        <div id="mail-overview">{general.email}</div>
                        <div id="location-overview">{general.city}</div>
                    </div>
                </div>
                <div id="content">
                    <div id="summary-overview">
                        <div className="overview-title">Summary</div>
                        <div id="summary-text">{general.summary}</div>
                    </div>

                    <div className="overview-title">Educational background</div>
                    {educational && educational.length > 0 && (
                        <div>
                            <div className="overview-title">Educational background</div>
                            {educational.map((item, index) => (
                                <div id="education-overview" key={index}>
                                    <div id="date-overview">{item.startDate} - {item.endDate}</div>                                                    
                                    <div id="education-card">
                                        <div id="education-institution">{item.institution}</div>
                                        <div id="education-degree">{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="overview-title">Work Experience</div>
                    {experience && experience.length > 0 && (
                        <div>
                            
                            {experience.map((item, index) => (
                                <div id="experience-overview" key={index}>
                                    <div id="experience-left">
                                        <div id="date-overview">{item.startDate} - {item.endDate}</div>                                      
                                        <div id="experience-company">{item.company}</div>
                                    </div>
                                    <div id="experience-right">
                                        <div id="experience-title">{item.position}</div>
                                        <div id="experience-content">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
                
            </div>
        )
    }
}