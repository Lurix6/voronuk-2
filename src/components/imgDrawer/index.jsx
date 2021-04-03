import React, { useState } from 'react';
import ImgDrawerWrapper from './styles'

const ImgDrawer = ({img, drawContent, children}) => {
  const [visible, setVisible] = useState(false)
  return <ImgDrawerWrapper
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}
  >
    <div className="imgWrapper" >
      <img src={img} alt=""/>
    </div>
    <div className={`drawerContent ${visible && 'open' || ''}`}>
      {
        children || drawContent
      }
    </div>
  </ImgDrawerWrapper>
}

export default ImgDrawer;