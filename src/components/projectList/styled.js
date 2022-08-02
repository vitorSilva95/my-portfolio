import styled from 'styled-components';

export const ContainerCards = styled.div`
  display:grid;
  grid-gap: 20px;
  grid-template-columns:repeat(auto-fill, minmax(300px, 500px));
  place-content:center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  animation: ${(props) => props.visible && 'fadeInLeft 1s ease-in-out'};

    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-500px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
}   
`;

export const Title = styled.h1`
  text-align:center;
  margin-bottom:100px;
  margin-top:100px;
`;
