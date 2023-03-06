import React, {Component} from "react";
import './style.css';

export default class Header extends Component {

    render() {
        return(
            <div className="header">
                <div className = "title">
                    Create Your CV
                </div>
                <div className = "project">
                    A personal React project
                </div>
            </div>
        )
    }
}