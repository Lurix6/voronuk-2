import React from 'react'
import HeaderWrapper from './header.style'
import { withRouter } from 'react-router-dom'
import Logo from '../../resources/img/logo.png'
import { Link } from 'react-router-dom'

const pages = [
  { 
    title: 'Головна',
    href: '/'
  },
  { 
    title: 'О компании',
    href: '/about'
  },
  { 
    title: 'Наши работи',
    href: '/our-work/'
  },
  { 
    title: 'Контакти',
    href: '/contact/'
  },
]

const Header = props => {
  const { location: { pathname } } = props

  return (  
    <HeaderWrapper>
      <div className='logoWrapper'>
        <Link to="/">
          <img alt="logo" src={Logo}></img>
        </Link>
      </div>
      <ul className="navBat">
        {
          pages.map(({ title, href }) => <Link className={href === pathname && 'active' || undefined} key={title} to={href}>
            {title}
          </Link>)
        }
      </ul>
    </HeaderWrapper>
  )
}

Header.propTypes = {

}

export default withRouter(Header)
