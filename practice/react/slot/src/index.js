import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component{
  // constructor也可以没有，会继承Component
  // constructor(props){
  //   super(props)

  // }

  render(){
    console.log(this.props.children)
    return (
      <div>
        <h1>这是Parent</h1>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Parent>
    <div>child1</div>
    <div>child2</div>
    <div>child3</div>
  </Parent>,
  document.getElementById('root')
);
