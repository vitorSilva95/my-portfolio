import styled from 'styled-components';

export const ContainerCard = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
  border: 2px solid black; 
  font-size: max(17px, 1vw);
  box-shadow: inset 0 0 1em #120c56, 0 0 1em black;
    &:hover{
      transform:scale(1.05,1.05);
    }


    h3 {
      border-bottom:2px solid #120c56;
      width:93.5%;
      padding:20px;;
      margin:0;
    }

    img {
      margin-top:20px
    }
`;

export const Pabout = styled.p`
  padding:30px;
  text-align:left;
`;

export const Link = styled.a`
  color:black;
  text-decoration:none;
  display:flex;
  background-color:white;
  width:200px;
  border-radius:40px;
  height:50px;
  font-size:20px;
  justify-content:center;
  align-items:center;
  margin-bottom:20px;
  cursor:pointer;
`;
