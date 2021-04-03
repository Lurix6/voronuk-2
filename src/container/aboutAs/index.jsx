import React from 'react'
import AboutAsWrapper from './style'
import Img1 from '../../resources/img/aboutAs/img1.jpg'

import AdvantageOne from '../../resources/img/aboutAs/advantages1.jpeg'
import AdvantageTwo from '../../resources/img/aboutAs/advantages2.jpeg'
import AdvantageThree from '../../resources/img/aboutAs/advantages3.jpeg'
import AdvantageFore from '../../resources/img/aboutAs/advantages4.jpeg'

const Header = props => {

  const advantages = [
    {
      title: 'Мы реагируем на изменения',
      img: AdvantageOne,
      desc: 'В условиях активного развития современных рынков, мы активно реагируем на изменение конъюнктуры',
    },
    {
      title: 'Принцип уважения',
      img: AdvantageTwo,
      desc: 'Для нас всегда неизменным остается принцип уважения к клиентам.',
    },
    {
      title: 'Прислушиваемся к клиентам',
      img: AdvantageThree,
      desc: 'Мы постоянно стараемся прислушиваться к отзывам клиентов, что бы лучше понимать их потребности и выдавать результаты, которые превосходят их ожидания.',
    },
    {
      title: 'Искренность',
      img: AdvantageFore,
      desc: 'Искренне надеемся, что наши опыт и знания позволят Вам открыть дополнительные возможности и воплотить в жизнь самые смелые идеи.',
    },
  ]

  return (
    <AboutAsWrapper>
      <div className="hero">
        <div className="heroImg"/>
        <div className="title" onLoad={(e) => {console.log(e)}} >
          <div>
            <h1>О НАС</h1>
          </div>
          <div>
            <h2>Габион Украина</h2>
          </div>
        </div>
      </div>
      <div className="aboutAs">
        <div className="aboutAsLeft">
          <div className="title">
            <h1>
              ГАБИОН УКРАИНА
            </h1>
          </div>
          <div className="horizontalBar" />
          <div className="secondTitle">
            <h2>
              Рады возможности приветствовать Вас на нашем официальном сайте. Наша компания специализируется на изготовлении, 
              реализации и выполнении работ по монтажу конструкций из габионов.
            </h2>
          </div>
          <div className="text">
            Этот экологически чистый природный материал является универсальным, долговечным и, что очень немаловажно, 
            недорогим способом решить множество проблем, связанных с укреплением слабых грунтов и берегоукреплением.
            <tr /> 
            Причем, все чаще и чаще их стали использовать не только как инженерную конструкцию, но и как декоративный 
            элемент – из них строят заборы, беседки, садовые скамьи, противошумовые стены, малые павильоны в 
            садово-парковом строительстве и даже стены в офисах!
          </div>
        </div>
        <div className="aboutAsRight">
          <div className="imgWrapper">
            <img src={Img1} alt=""/>
          </div>
          <div className="description">
            <p>
              Очень гордимся тем, что за достаточно небольшой промежуток времени мы сумели построить современную, 
              инновационную и ответственную компанию.
            </p>
          </div>
        </div>
      </div>
      <div className="aurAdvantages">
        <div className="advantagesTitle">
          <div className="titleMain">
            <h2>
              Наши преимущества
            </h2>
          </div>
          <div className="titleSub">
            <h3>
              Команда компании дорожит самым ценным — нашими клиентами
            </h3>
          </div>
        </div>
        <ul className="advatagesList">
          {
            advantages.map(item => <li key={item.title} className="advatageItem" >
              <div className="advatageImgWrapper" >
                <img src={item.img} alt=""/>
              </div>
              <div className="advatageTitle">
                <h2>{item.title}</h2>
                <h3>{item.desc}</h3>
              </div>
            </li>)
          }
        </ul>
      </div> 
    </AboutAsWrapper>
  )
}

Header.propTypes = {

}

export default Header
