import React from 'react';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

function Home(){
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me(){
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  )
}

function Product(){
  return (
    <div>
      <h1>产品页面</h1>
    </div>
  )
}
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div id='app'>
        <Router basename='/admin'>
          <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/me' replace >个人中心</Link>
          </div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/product' component={Product}></Route>
          <Route path='/me' component={Me}></Route>
        </Router>
      </div>
    )
  }
}

export default App;
