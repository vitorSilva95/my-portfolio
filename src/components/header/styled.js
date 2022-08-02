import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color:black;
  position:fixed;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:2;
`;

export const Title = styled.h1`
  color:white;

    span {
        animation: animate 1.5s linear infinite;
      }

    @keyframes animate {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          opacity: 0;
        }
      }
`;

export const OlNav = styled.ol`
  display:flex;
  padding:10px;
  width:max(400px, 600px);
  justify-content:space-between;
  flex-wrap:wrap;
  font-size: max(12px, 1vw);

    li {
      width:250px;
      height:50px;
      list-style-type: none;
      padding:0 30px;
    }
`;

export const Link = styled.a`
  text-decoration:none;
  color:white;
`;
