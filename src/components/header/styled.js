import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color:black;
  position:fixed;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:10;
    h1 {
      margin:20px;
      padding-bottom:20px;
    }
`;

export const OlNav = styled.ol`
  display:flex;
  width:min(100%,1000px);
  justify-content:space-around;
  flex-wrap:wrap;
  font-size: max(12px, 1vw);

    li {
      width:80px;
      height:50px;
      text-align:center;
      list-style-type: none;
      margin-bottom:10px;
    }
`;

export const Link = styled.a`
  text-decoration:none;
  color:white;
`;
