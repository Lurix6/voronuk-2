import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: red;
  padding: 20px 10px 20px;
  background-color: #1d242d;
  color: rgba(255,255,255,0.4);
  font-size: 13px;

  .socialNet {
    display: flex;
    
    a {
      width: 20px;
      height: 20px;
      margin-right: 15px;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
        fill: rgba(255,255,255,0.8);
      }
    }
    
    a:last-child {
      margin-right: 0;
    }
  }
`
export default FooterWrapper