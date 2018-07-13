import React from 'react';
class Counter extends React.Component {
  constructor () {
    super();
    console.log('------>I am in constructor<--------');
  }

  componentDidMount () {
    console.log('------>I am in componentDidMount<--------');
  }

  componentDidUpdate () {
    console.log('------>I am in componentDidUpdate<--------');
  }

  componentWillUnmount () {
    console.log('------>I am in componentWillUnmount<--------');
  }

  render () {
    console.log('-------->I am in render<--------');
    return <div className='heading'>{this.props.counter}</div>;
  }
}
;

export default Counter;