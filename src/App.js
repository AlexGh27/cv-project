import React, {Component} from "react";
import Header from './Header';
import General from './General';
import Educational from './Educational';
import Experience from './Experience';


export default class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div className = "header">
          <Header/>
          
        </div>

        <div className = "general">
          <General/>
        </div>
      </div>
      
    )
  }
}
