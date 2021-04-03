import React from 'react'
import AboutAsWrapper from './styles'

import Img1 from '../../resources/img/ourWorks/ourWorks.jpg';
import Img2 from '../../resources/img/ourWorks/ourWorks1.jpg';
import Img3 from '../../resources/img/ourWorks/ourWorks2.jpg';
import Img4 from '../../resources/img/ourWorks/ourWorks3.jpg';
import Img5 from '../../resources/img/ourWorks/ourWorks4.jpg';
import Img6 from '../../resources/img/ourWorks/ourWorks5.jpg';
import Img7 from '../../resources/img/ourWorks/ourWorks6.jpg';


import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const OurWorks = props => {

  const items = [
    {
      itemId: 'sample-id',
      mediaUrl: Img1,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img2,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img3,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img4,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img5,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img6,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    {
      itemId: 'sample-id',
      mediaUrl: Img7,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
  ]

  return (
    <AboutAsWrapper>
      <div className="hero" onLoadedData={(e) => {console.log('kdjsfhsg hdsßaååß')}}>
        <div className="heroImg"/>
        <div className="title">
          <div>
            <h1>Наши работы</h1>
          </div>
          <div>
            <h2>Рассмотрите детальнее наши работы</h2>
          </div>
        </div>
      </div>
      <ProGallery
        items={items}
        container = {{
          width: window.innerWidth < 1200 ? window.innerWidth : 1200,
          height: '200px',
        }}      
      />
    </AboutAsWrapper>
  )
}

OurWorks.propTypes = {

}

export default OurWorks;
