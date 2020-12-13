import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from './store'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,LogoImg,
  Nav,NavLeft,NavRight,NavItem,
  NavSearchWrapper,NavSearch,
  SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem
} from './style'

class Header extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {}
  // }
  render(){
    const {focused,inputFocus,inputBlur,list} = this.props
    return (
      <HeaderWrapper>
        <Logo>
          <LogoImg />
        </Logo>
        <Nav>
          <NavLeft>
            <NavItem className='active'>首页</NavItem>
            <NavItem>下载App</NavItem>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearchWrapper>
                <NavSearch onFocus={() => inputFocus(list)} onBlur={inputBlur}></NavSearch>
                <i className='iconfont'>&#xe60b;</i>
                { this.searchInfo() }
              </NavSearchWrapper>
            </CSSTransition>
          </NavLeft>
          <NavRight>
            <NavItem><i className='iconfont'>&#xe636;</i></NavItem>
            <NavItem>登陆</NavItem>
            <NavItem className='btn'>注册</NavItem>
            <NavItem className='btn'><i className='iconfont'>&#xe641;</i>写文章</NavItem>
          </NavRight>
        </Nav>
      </HeaderWrapper>
    )
  }
  searchInfo = () => {
    const {focused,mouseIn,list,page,totalPage,
      mouseEnterSearch,mouseLeaveSearch,switchToSwitch} = this.props
    const jsList = list.toJS();
    const pageList = [];
    for(let i=(page-1)*10,len=jsList.length;i<page*10 && i<len; i++){
      pageList.push(
        <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
      )
    }
    if(focused || mouseIn){
      return (
        <SearchInfo onMouseEnter={mouseEnterSearch} onMouseLeave={mouseLeaveSearch}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => switchToSwitch(page,totalPage)}>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  focused:state.getIn(['header','focused']),
  mouseIn:state.getIn(['header','mouseIn']),
  list:state.getIn(['header','list']),
  page:state.getIn(['header','page']),
  totalPage:state.getIn(['header','totalPage'])
})
const mapDispatchToProps = (dispatch) => ({
  inputFocus(list){
    (list.size === 0) && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocusAction(true))
  },
  inputBlur(){
    dispatch(actionCreators.searchBlurAction(false))
  },
  mouseEnterSearch(){
    dispatch(actionCreators.mouseEnterSearch(true))
  },
  mouseLeaveSearch(){
    dispatch(actionCreators.mouseEnterSearch(false))
  },
  switchToSwitch(page,totalPage){
    const nextPage = page < totalPage ? page + 1 : 1
    dispatch(actionCreators.switchToSwitch(nextPage))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)