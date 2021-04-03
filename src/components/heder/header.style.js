import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 84px;
  background-color: var(--primary-color);
  padding: 0 30px;

  .logoWrapper {
    padding-top: 5px;

    img {
      height: 70px;
      cursor: pointer;
    }
  }

  .navBat {
    display: flex;
    align-self: center;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      margin-right: 35px;
      height: 100%;
      font-weight: 400;
      color: white;
      font-size: 16px;
      letter-spacing: 0px;
      font-style: normal;
      text-decoration: none;
    }

    .active {
      border-top: 3px solid var(--secondary-color);
      color: var(--secondary-color);
    }
  }
`

export default HeaderWrapper