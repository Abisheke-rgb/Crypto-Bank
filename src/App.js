import React, {Component} from 'react';

class Application extends Component{

  clickHandle = () => {
  }

  render(){

    return (
      <div className='mainBody'>
        <h1>You clicked the button {} times</h1>
        <button className='bot'>Click Me</button>
      </div>
    );

  }

}

export default Application;
