import React, {Component} from "react";
import Header from './Header';
import General from './General';
import Educational from './Educational';
import Experience from './Experience';
import Overview from './Overview';
import Footer from './Footer';

export default class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="app">

         <Header/>

         <div className="left-panel">
           <General/>

           <Educational/>

           <Experience/>
         </div>

         <div className="right-panel">
            <Overview/>
         </div>

         <Footer/>

      </div>
      
    )
  }
}
