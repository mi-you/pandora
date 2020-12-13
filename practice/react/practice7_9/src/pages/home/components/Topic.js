import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import photo from '../../../statics/photoGray.png'
import {
TopicWrapper,
TopicItem
} from '../style'

class Topic extends Component {
  render(){
    const {list} = this.props
    return (
      <TopicWrapper>
        {
          list.map(item => (
          <TopicItem key={item.get('id')}>
            <img className='topic-img' src={photo} alt='icon'/>
            {item.get('title')}
          </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list:state.getIn(['home','list'])
}) 
export default connect(mapStateToProps,null)(Topic)