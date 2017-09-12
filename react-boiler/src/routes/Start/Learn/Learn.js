import React from 'react';
import './Learn.css';
function Learn( props ){

    return(
      <div className="Start-learn center-vertical">
        <LearnTop history={props.history}/>

        <div className='temp center'>
          Cat Details
        </div>
        <div className='temp center'>
          Stats
        </div>
        <div className='temp center'>
          statements
        </div>
        <div className='temp center'>
          Tour imgs
        </div>
        <div className='temp center'>
          Why?
        </div>
        <div className='temp center'>
          quote
        </div>
      </div>
    );
}
export default Learn;

function LearnTop(props){
  return(
    <div className="learn-top-container center">
      <div className="learn-top-Start center">
        <h1>Bring your creative project to life.</h1>
        <button onClick={() => props.history.push('/start')}>Start a project</button>
      </div>
      <div className="learn-top-categories-container center">
        <div className='learn-top-categories-header center'>Create a project in any of the following categories</div>
        <ul className="learn-top-categories center">
          {['Art', 'Comics', 'Crafts', 'Dance','Design', 'Fashion', 'Film & Video', 'Food', 'Journalism', 'Music', 'Technology', 'Theater']
          .map((cat, idx) => (
            <li className="learn-category" key={idx}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
