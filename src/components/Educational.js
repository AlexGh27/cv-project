import React, {Component} from "react";

export default class Educational extends Component {

    render() {
        return(
            <div>
                <div className="field-title">Educational background</div>
                <form className="form">
                    <input type="text" id="education-title" placeholder="Education Title"/>

                    <input type="text" id="education-institution" placeholder="Institution"/>

                    
                    <input type="text" id="education-start" placeholder="Start Date" className="short-input"/>

                    <input type="text" id="education-end" placeholder="End Date" className="short-input"/>
                    
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}