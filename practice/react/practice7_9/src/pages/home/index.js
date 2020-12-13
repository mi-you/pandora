import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import {actionCreators} from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import photo from '../../statics/timg9.jpg'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style"

class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner' src={photo} alt='banner'/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>

    )
  }

  componentDidMount(){
    this.props.changeHomeData()
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){ 
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})
export default connect(null,mapDispatchToProps)(Home)