import styled from 'styled-components';
import OurWorks from '../../resources/img/ourWorks.jpg'

const DashbordWrapper = styled.div`
  padding: 50px 30px 0 30px;
  background-color: white;
  
  .weProduce {
    display: flex;
    -ms-box-orient: horizontal;
    margin-bottom: 30px;

    .title {
      width: 30%;
      margin-right: 30px;

      h2 {
        border-right: 3px solid var(--borded-blue-color);
        font-size: 32px;
        line-height: 1.2em;
        padding-bottom: 30px;
      }
    }
    .description {
      width: 70%; 
      
      h3 {
        font-size: 28px;
        line-height: 1.3;
      }
    }  
  }

  .produceList {
    display: flex;

    .produceItem {
      width: 33.3%;
      margin-right: 20px;

      .produceImgWrapper {
        transition: 1s;
        cursor: pointer;

        img {
          width: 100%;
        }
      }
      .produceImgWrapper:hover {
        transform: scale(1.02);
      }
    
      .produceTitli {
        text-align: center;
        font-size: 24px;
        line-height: 1.4;
        margin-top: 1.67em;
        margin-bottom: 1.5em;
      }

      .produceText {
        color: #4a4e57;
        text-align: center;
        
        p {
          line-height: 1.8;
          font-size: 16px;
        }
      }
  
    }
    .produceItem:last-child {
      margin-right: 0;
    }
  }

  .gabonsType {
    margin: 30px 0;
  }

  .advantagesList {
    display: flex;

    .advantageItem {
      width: 33%;
      margin: 0 auto;
      
      .advantageImg {
        display: flex;
        justify-content: center;
      }

      .advantageTitle {
        text-align: center;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .advantagesDeskription {
        text-align: center;
        margin-top: 0;
        margin-bottom: 20px;
        line-height: 1.8;
        font-size: 16px;
      }
    }
  }

  .ourWorks {
    background-color: rgba(0,0,0,0.77);
    background-image: url(${OurWorks});
    background-position: left top;
    background-repeat: no-repeat;
    background-blend-mode: color;
    padding-top: 60px;
    padding-right: 30px;
    padding-bottom: 60px;
    padding-left: 30px;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-color: #e2e2e2;
    border-top-style: solid;
    border-bottom-style: solid;
    background-size: cover;

    .ourWorksImgList {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 15px;
      row-gap: 15px;

      .ourWorksSearchWraper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: #212934;
        border-radius: 50%;
        margin-bottom: 5px;
        
        svg {
          width: 15px;
          height: 15px;
          fill: white;
        }
      }
    }
  }

  .ourWorksTilte {
    display: flex;
    color: white;
    margin-bottom: 40px;

    .ourWorksText {
      width: 30%;
      border-right:  3px solid rgb(85, 173, 223);

        h2{
          font-size: 32px;
          line-height: 1.2;
        }
    }
    .ourWorksDesk {
      padding: 20px 0 0 20px;
      h3{
        font-size: 28px;
        line-height: 1.2;
      }
    }
  }
`

export default DashbordWrapper