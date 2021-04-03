import React from 'react'
import ContactWrapper from './style'

import { ReactComponent as InstagramIcon }from '../../resources/svg/instagram.svg'
import { ReactComponent as FacebookIcon }from '../../resources/svg/facebook.svg'
import { ReactComponent as TwitterIcon }from '../../resources/svg/twitter.svg'

const Conatcts = props => {

  return (
    <ContactWrapper>
      <div className="contactHolder">
        <div className="content">
          <div className="header">
            <h2>
              ООО «ГАБИОН УКРАИНА»
            </h2>
          </div>
          <div className="spanLine">
            <div className="spanItem"></div>
          </div>
          <div className="addres">
            <h3>
              Украина, Киев, Окружная дорога 22
            </h3>
          </div>
          <div className="contactInfo">
            <div className="contactPhones">
              <div className="title">
                Телефоны:
              </div>
              <div className="contactItem">+38 0 (44) 227-26-16</div>
              <div className="contactItem">+38 0 (97) 527-26-16</div>
              <div className="contactItem">+38 0 (95) 527-26-16</div>
            </div>
            <div className="contactPeriod">
              <div className="title">
                Режим работы:
              </div>
              <div className="contactItem">Пн-Пт: с 8:30 до 18:30</div>
              <div className="contactItem">Суббота: выходной</div>
              <div className="contactItem">Воскресенье: выходной</div>
            </div>
            <div className="conatctEmail">
            <div className="title">
              Почта:
              </div>
              <a href="mailto:zabor.gabion@gmail.com" className="contactItem">zabor.gabion@gmail.com</a>
              <div className="socialLinks">
                <div className="socialWrapper" >
                  <a href="https://www.facebook.com/profile.php?id=100009652758276"><FacebookIcon/></a>
                </div>
                <div className="socialWrapper" >
                  <a href="https://www.instagram.com/vasyl_popovych6/"><InstagramIcon/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

Conatcts.propTypes = {

}

export default Conatcts
