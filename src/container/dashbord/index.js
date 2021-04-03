import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DashbordWrapper from './dashbord.style'
import ButterflyImg from '../../resources/img/butterfly.png'
import SecondProduce from '../../resources/img/produce2.png'
import ThoughtProduce from '../../resources/img/produce3.png'

import AdvantageOne from '../../resources/img/garanty.png'
import AdvantageTwo from '../../resources/img/experience.png'
import AdvantageThree from '../../resources/img/garanty.png'

import OurWorks1 from '../../resources/img/ourWorks1.jpg'
import OurWorks2 from '../../resources/img/ourWorks2.jpg'
import OurWorks3 from '../../resources/img/ourWorks3.jpg'
import OurWorks4 from '../../resources/img/ourWorks4.jpg'
import OurWorks5 from '../../resources/img/ourWorks5.jpg'
import OurWorks6 from '../../resources/img/ourWorks6.jpg'


import { ReactComponent as SearchIcon }from '../../resources/svg/loupe.svg'

import { Lightbox } from 'react-modal-image';
import  ImgDrawer from '../../components/imgDrawer/'


const produceList = [
  {
    img: ButterflyImg,
    title: 'Эксклюзивные габионы',
    text: 'Одним из направлений нашей компании является изготовление нестандартных эксклюзивных конструкций из габионов. Мы готовы поделиться своим опытом и знаниями для воплощения в жизнь Ваших самых смелых идей.'
  },
  {
    img: SecondProduce,
    title: 'Конструкции габионов для самостоятельного монтажа',
    text: 'Модельный ряд состоит из: заборов, каминов, клумб, высоких грядок, подпорных стенок, ограждения мусорных баков и много другого. Наша команда постоянно работает над увеличение линейки, для того чтобы максимально удовлетворить потребности заказчика.'
  },
  {
    img: ThoughtProduce,
    title: 'Строительство габионных конструкций под ключ',
    text: 'Наши квалифицированные специалисты готовы в кратчайшие сроки выполнить монтаж габионных конструкций любой сложности.'
  }
]

const gabonsList = [
  {
    title: 'Габионы сварные',
    img: ''
  },
  {
    title: 'Габионы из сетки двойного кручения',
    img: ''
  },
  {
    title: 'Заборы из дерева',
    img: ''
  },
  {
    title: 'Заборы жалюзи металлические',
    img: ''
  },
  {
    title: 'Заборы из сварной сетки',
    img: ''
  },
]

const advantagesList = [
  {
    img: AdvantageOne,
    title: 'МЫ ГАРАНТИРУЕМ СРОКИ ВЫПОЛНЕНИЯ РАБОТ',
    deskr: `Команда компании дорожит самым ценным — нашими клиентами. Ради выполнения своих обязательств мы готовы работать в тяжёлых условиях с ненормированным графиком, ведь практически все работы ведутся на 
      отрытом воздухе и зачастую сопровождаются сюрпризами природы.
      И конечно же перед началом сотрудничества все работы строго регламентируются договором с чёткими сроками их выполнения.`
  },
  {
    img: AdvantageTwo,
    title: 'У НАС БОЛЬШОЙ ОПЫТ СТРОИТЕЛЬСТВА',
    deskr: `Наша компания узкопрофильное предприятие, нацеленное на качественное производство и монтаж габионных конструкций. 
    Начиная с 2013 года, мы успешно ввели в эксплуатацию не один десяток объектов. Все это время мы трудились, набирались опыта и развивались в этом довольно простом на первый взгляд деле. На сегодняшний день с гордостью заявляем, что, занимаясь любимым делом команда 
    компании Габион Украина по праву является профессионалам своего дела и лидерами в своей отрасли.`
  },
  {
    img: AdvantageThree,
    title: 'МЫ ГАРАНТИРУЕМ КАЧЕСТВО НАШЕЙ ПРОДУКЦИИ',
    deskr: `Вся наша продукция Украинского производства. Так как мы являемся непосредственным производителем, то контроль качества происходит на всех этапах производства.
    На всю продукцию предоставляется 10 летняя гарантия.`
  },
]

const ourWorks = [
  {
    img: OurWorks1,
    title: 'Частный дом'
  },
  {
    img: OurWorks2,
    title: 'Частный дом'
  },
  {
    img: OurWorks3,
    title: 'Частный дом'
  },
  {
    img: OurWorks4,
    title: 'Частный дом'
  },
  {
    img: OurWorks5,
    title: 'Частный дом'
  },
  {
    img: OurWorks6,
    title: 'Частный дом'
  },
]

const Dashbord = props => {

  const [openImg, setOpenImg] = useState('')

  return (
    <DashbordWrapper>
      <div className="weProduce" >
        <div className="title">
          <h2>
            Что мы <br/>
            производим
          </h2> 
        </div>
        <div className="description">
          <h3>
            Наша компания производит конструкции из габионов, эксклюзивные габионы, 
            сопутствующие товары собственного производства а так же  
            предлагает строительство габионных конструкций под ключ.  
          </h3>
        </div>
      </div> 
      <ul className="produceList">
          { produceList.map(item => <li className="produceItem">
            <div className="produceImgWrapper" onClick={ () => setOpenImg(item.img)} >
              <img src={item.img} alt=""/>
            </div>
            <h5 className="produceTitli">
              { item.title }
            </h5>
            <div className="produceText">
              <p>{item.text}</p>
            </div>
          </li>)
          }
        </ul>
        <div className="gabonsType">
        </div>
        <div className="weProduce">
          <div className="title">
            <h2>Наши <br/>преимущества</h2>
          </div>
          <div className="description">
            <h3>Почему лучше работать с нами</h3>
          </div>
        </div>
        <ul className="advantagesList">
          { advantagesList.map(item => (
            <li className="advantageItem">
              <div className="advantageImg">
                <img src={item.img} alt=""/>
              </div>
              <h3 className="advantageTitle">{item.title}</h3>
              <div className="advantagesDeskription">
                {item.deskr}
              </div>
            </li>
          ))
          }
        </ul>
        <div className="ourWorks">
          <div className="ourWorksTilte">
            <div className="ourWorksText"><h2>Наши <br/>работы:</h2></div>
            <div className="ourWorksDesk"><h3>Узнайте о нас больше – нажмите на ссылку порфтолио или локацию ниже для детального просмотра</h3></div>
          </div>
          <div className="ourWorksImgList" >
            { ourWorks.map(item => <ImgDrawer img={item.img}>
              <div  className="ourWorksSearchWraper">
                <SearchIcon />
              </div>
              {item.title}
            </ImgDrawer>)
            }
          </div>
        </div>
        { openImg &&
          <Lightbox
            large={openImg}
            medium={openImg}
            onClose={() => setOpenImg(false)}
          />
        }
    </DashbordWrapper>
  )
}

Dashbord.propTypes = {

}

export default Dashbord
