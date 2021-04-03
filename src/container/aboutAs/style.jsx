import styled from 'styled-components'
import Hero from '../../resources/img/aboutAs/hero.jpg'

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

  .aboutAs {
    background-color: white;
    display: flex;
    padding: 20px 30px;

    .aboutAsLeft {
      width: 50%;
      padding: 20px 20px;

      .title {
        font-size: 28px;
        line-height: .8;
        color: #212934;
      }

      .horizontalBar {
        background-color: #55addf;
        border-top-width: 3px;
        border-radius: 50px;
        height: 4px;
        margin: 25px 0;
        width: 100%;
        max-width: 170px;
      }

      .secondTitle {
        font-size: 28px;
        line-height: 1.8;
        margin-bottom: 30px;
        color: #4a4e57;
      }

      .text {
        line-height: 1.8;
        font-size: 16px;
        color: #4a4e57;

        tr {
          height: 1em;
        }
      }
    }
    .aboutAsRight {
      width: 50%;

      .imgWrapper {
        margin-bottom: 20px;
        overflow: hidden;

        img {
          width: 100%;
          transition: all 1s ease-out 0.2s;
        
          &:hover {
            transform: scale(1.2);
            filter: blur(1px);
            opacity: .8;
          }
        }
      }

      .description   {
        color: #4a4e57;
      }
    }
  }

  .aurAdvantages {
    background-color: white;

    .advantagesTitle {
      display: flex;
      margin-bottom: 20px;

      .titleMain {
        flex-grow: 1;
        font-size: 32px;
        line-height: 1.2;
        padding-left: 20px;
        
        h2 {
          border-right: 3px solid var(--borded-blue-color);
          font-size: 32px;
          line-height: 1.2em;
          padding-bottom: 30px;
        }
      }

      .titleSub {
        flex-grow: 1;
        padding-left: 15px;

        h3 {
          font-style: italic;
          font-size: 28px;
          line-height: 1.3;
        }
      }
    }

    .advatagesList {
      display: flex;
      margin: 0 20px;

      .advatageItem {
        width: 33.3%;
        margin-right: 20px;
        background-color: #f9f9fb;

        .advatageImgWrapper {
          cursor: pointer;
          overflow: hidden;

          img {
            transition: 1s;
            width: 100%;
          }

          img:hover {
            transform: scale(1.04);
            }
          }

        .advatageTitle {
          padding: 20px;

          h2 {
            overflow-wrap: anywhere;
            font-size: 28px;
            line-height: 1.36;
            margin-bottom: 20px;
            width: 100%;
          }

          h3 {
            font-size: 16px;
            line-height: 1.8;
          }
        }
      }
      .advatageItem:last-child {
        margin-right: 0;
      }
    }
  }
`
export default AboutAsWrapper