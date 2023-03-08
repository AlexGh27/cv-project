import React, {Component} from "react";

export default class Experience extends Component {

    render() {
        return(
            <div className="experience">
                <div className="field-title">Work Experience</div>

                <form className="form">
                    <input type="text" placeholder="Position"/>

                    <input type="text" placeholder="Company"/>

                    <input type="text" placeholder="Start Date" className="short-input"/>

                    <input type="text" placeholder="End Date" className="short-input"/>

                    <input type="text" placeholder="Description" className="big-input"/>

                    <button>ADD</button>
                </form>
                
            </div>
        )
    }
}