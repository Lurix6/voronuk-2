import styled from 'styled-components'
import WrapperImg from '../../resources/img/wrapper.jpg'

const AppWrapper = styled.div`
  width: 100%;
  background-image: url(${WrapperImg});
  background-repeat: repeat;


  .appContent {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`

export default AppWrapper