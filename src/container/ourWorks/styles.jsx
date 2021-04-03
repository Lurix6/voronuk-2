import styled from 'styled-components'
import Hero from '../../resources/img/ourWorks/hero.png'

const AboutAsWrapper = styled.div`

  .hero {
    height: 400px;
    position: relative;

    .heroImg {
      background-image: url(${Hero});
      height: 100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .title {
      position: absolute;
      top: 40%;
      color: #fff;

      div {
        background-color: rgba(0,0,0,0.4);
        padding: 3px 15px;
        width: fit-content;
        margin-left: 30px;
        h1 {
          margin: 0px;
          font-size: 50px;
          line-height: 1.2;
        }

        h2 {
          font-size: 40px;
          line-height: 1.2;
        }
      }

      div:first-child {
        margin-bottom: 20px;
      }
    }

    
  }
`
export default AboutAsWrapper