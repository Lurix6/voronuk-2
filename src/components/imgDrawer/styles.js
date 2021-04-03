import styled from 'styled-components'

const ImgDrawer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  cursor: pointer;
  
  .imgWrapper {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .drawerContent {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: -100%;
    top: 0;
    width: 0px;
    bottom: 0;
    background-color: rgb(111, 179, 120, 0.8);
    transition: all .6s ease-in-out;
    font-size: 1.8em;

    &.open {
      width: 100%;
      left: 0;
    }
  }
`

export default ImgDrawer