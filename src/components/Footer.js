import React, { Component } from 'react';
import html2canvas from 'html2canvas';

export default class Footer extends Component {
  captureScreenshot = () => {
    const overviewElement = document.getElementById('overview'); 

    html2canvas(overviewElement).then((canvas) => {
      const screenshotUrl = canvas.toDataURL('image/png');     
      const link = document.createElement('a');
      link.href = screenshotUrl;
      link.download = 'myResume.png';       
      link.click();
    });
  };

  render() {
    return (
      <div className="footer">
        <button onClick={this.captureScreenshot} id="save-button">SAVE AS IMAGE</button>              
      </div>
    );
  }
}
