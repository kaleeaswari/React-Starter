import React from 'react';
import Counter from './Counter.jsx';
class LifeCycle extends React.Component {
  constructor () {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount () {
    const intervalCounter = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      if (this.state.counter == 10) {
        clearInterval(intervalCounter);
      }
    }, 1000);
  }
  
  render () {
    return <div className='heading'>
      {this.state.counter % 3 != 0 && <Counter counter={this.state.counter}/>}
    </div>;
  }
}
;

export default LifeCycle;