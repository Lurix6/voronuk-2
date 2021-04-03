import React from 'react'
import FooterWrapper from './style'
import { ReactComponent as InstagramIcon }from '../../resources/svg/instagram.svg'
import { ReactComponent as FacebookIcon }from '../../resources/svg/facebook.svg'
import { ReactComponent as TwitterIcon }from '../../resources/svg/twitter.svg'

const Header = props => {

  const socialNet = [
    {
      img: InstagramIcon,
      href: 'https://www.instagram.com/vasyl_popovych6/',
    },
    {
      img: FacebookIcon,
      href: ''
    },
    {
      img: TwitterIcon,
      href: ''
    },
  ]

  return (
    <FooterWrapper>
      <div className="footerCopyrite">
        Copyright 2020 All Rights Reserved
      </div>
      <ul className="socialNet">
        { 
          socialNet.map((item, index) => <a key={index} href={item.href}>{<item.img />}</a>)
        }
      </ul>
    </FooterWrapper>
  )
}

Header.propTypes = {

}

export default Header
