import styled from 'styled-components'
import PlaceholderImage from '../../resources/img/contacts/placeholder.png'

const ContactWrapper = styled.div`
  .contactHolder {
    display: relative;
    pointer-events: none;
    width: 100%;
    height: 800px;
    z-index: -1;
    opacity: 1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${PlaceholderImage});
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: color;
    min-height: 150px;
    transform: translate3d(0px, 0px, 0px);
  
  
    .content {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;

      .header {
        color: white;
        margin-top: 80px;
        margin-bottom: 40px;        
        color: rgb(255, 255, 255);
        font-size: 32px;
        line-height: 1.2;

        h2 {
          text-align: center;
        }
      }

      .spanLine {
        display: flex;
        justify-content: center;

        .spanItem {   
          border-color: red;
          border-top: 2px solid #e2e2e2;
          border-bottom: 2px solid #e2e2e2;
          height: 10px;
          width: 300px;
        }
      }

      .addres {
        display: flex;
        color: white;
        margin: 25px 0;
        justify-content: center;
      }

      .contactInfo {
        color: white;
        display: flex;
        justify-content: center;

        .contactPhones, .contactPeriod, .conatctEmail {
          margin-right: 10px;
          border-right: 1px solid rgb(94, 98, 118);
          padding: 0 10px;

          .title {
            text-align: center;
            color: var(--secondary-color);
            font-size: 28px;
            line-height: 1.3;
          }

          .contactItem { 
            font-size: 28px;
            line-height: 1.3;
          }

          a { 
            color: white;
            text-decoration: none;
            cursor: pointer;
          }
        }
        .conatctEmail {
          margin-right: 0;
          border-right: none;

          .socialLinks {
            margin-top: 10px;
            display: flex;
            justify-content: center;

            .socialWrapper {
              cursor: pointer;
              height: 40px;
              width: 40px;
              border-radius: 50px;
              background-color: #292b37;
              margin-right: 10px;

                svg {
                padding: 7px;
                height: 25px;
                width: 25px;
                fill: #55ADDF;
              }

              &::last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
`
export default ContactWrapper