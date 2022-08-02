import styled from 'styled-components';

export const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  animation: ${(props) => props.visible && 'fadeIn 1s ease-in-out'};

    @keyframes fadein {
      from { opacity: 0.3; }
      to { opacity: 1; }
}
`;

export const ContainerAbout = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:70%;
  box-shadow: inset 0 0 1em #120c56, 0 0 1em black;
  font-size: max(17px, 1vw);
    img {
      width:max(200px, 20%);
      padding:20px;
      border-radius: 50px;
    }

    div {
      width:60%;

          @media(max-width: 1200px) {
          width:80%;
      }
    }
    @media(max-width: 1200px) {
      flex-direction: column;
    }
`;

export const Title = styled.h1`
  text-align:center;
  margin-bottom:100px;
  margin-top:100px;
`;
