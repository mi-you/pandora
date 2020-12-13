import styled from 'styled-components'
import logoPic from '../../statics/photo.png'
import photoGray from '../../statics/photoGray.png'


export const HeaderWrapper = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  // background:url(${photoGray});
`
export const Logo = styled.a`
  display:inline-block;
  height:90%;
  margin-left:4px;
`

export const LogoImg = styled.img.attrs({
  src:logoPic,
  className:'aaa'
})`
  height:100%;
`
export const Nav = styled.div`
  flex:auto;
  display:flex;
  justify-content:space-between;
  padding:0 20px;

`
export const NavLeft = styled.div`
  display:flex;    
  align-items: center;
  flex: none;
  color:#333;
`
export const NavRight = styled.div`
  display:flex;
  align-items: center;
  flex: none;
  color:#666;
`
export const NavItem = styled.div`
  &.active{
    color:#ea6f5a;
  }
  &.btn{
    color:#ea6f5a;
    border:1px solid;
    border-radius:8px;
    padding:6px 10px
  }
  flex:none;
  margin:0 10px;
`
export const NavSearchWrapper = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  width:160px;
  font-size:14px;
  .iconfont{
    position: absolute;
    right: 3px;
    cursor: pointer;
    padding: 3px 5px;
    border-radius: 50%;
  }
  &.slide-enter{
    transition:all .2s ease-out
  }
  &.slide-enter-active{
    width:260px;
  }
  &.slide-enter-done{
    width:260px;
  }
  &.slide-enter-done .iconfont{
    background-color: #999;
    color:#fff;
  }
  &.slide-exit{
    transition:all .2s ease-out
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:100%;
  border-radius: 15px;
  border: none;
  padding: 6px 26px 6px 16px;
  outline: none;
  background-color:#eee;
  &::placeholder{
    color:#999;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  min-height: 100px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0 0 4px 1px rgba(0,0,0,.1);
`
export const SearchInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
export const SearchInfoSwitch = styled.a`
`
export const SearchInfoList = styled.div`
`
export const SearchInfoItem = styled.a`
  display: inline-flex;
  padding: 2px 7px;
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #D3D3D3;
`