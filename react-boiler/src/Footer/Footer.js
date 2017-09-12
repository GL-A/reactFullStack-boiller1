import React from 'react';
import './Footer.css';
function Footer( props ){

    return(
      <div className="Footer">
        <div className="footer-top">
          {[
              {header: 'About Us', links:['What is Kickstarter', 'Who we are', 'Impact', 'Jobs', 'Press']},
              {header: 'Help', links:['What is Kickstarter', 'Who we are', 'Impact', 'Jobs', 'Press']},
              {header: 'Discover', links:['What is Kickstarter', 'Who we are', 'Impact', 'Jobs', 'Press']},
              {header: 'Hello', links:['What is Kickstarter', 'Who we are', 'Impact', 'Jobs', 'Press']}
          ].map((divObj, idx) =>(
            <div key={idx} style={{width: '25%'}}>
              <h4>{divObj.header}</h4>
              <ul>
                {divObj.links
                .map((word, i) => (
                  <li key={i}>{word}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{width: '100%', borderTop: 'solid 1px #353535', padding: '30px 0'}}>
          @tm
        </div>
      </div>
    );
}
export default Footer;
