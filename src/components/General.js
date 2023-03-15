import React, {Component} from "react";

export default class General extends Component {

    render() {
        return(
            <div className="general">
                <div className="field-title">General Information</div>
                <form className="form">

                    
                        <input id="firstName" type="text" placeholder="First Name" required/>
                    
                        <input id="lastName" type="text" placeholder="Last Name" required/>
                    
                    
                    
                        <input id="email" type="email" placeholder="Email Address"/>

                        <input id="tel" type="text" placeholder="Phone Number"/>
                   
                        <input id="city" type="text" placeholder="City"/>

                        <input id="description" type="text" placeholder="Short Description"/>

                </form>
            </div>
        )
    }
}