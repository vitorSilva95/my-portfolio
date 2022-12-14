import styled from 'styled-components';

export const ContainerCard = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
  border: 2px solid black;
  padding:5px;
  margin:20px;
  font-size: max(13px, 1vw);
  box-shadow: inset 0 0 1em #120c56, 0 0 1em black;
    &:hover{
      transform:scale(1.05,1.05);
    }


    h3 {
      border-bottom:2px solid #120c56;
      font-size: max(15px, 1.2vw);
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
  width:max(80px,7vw);
  border-radius:40px;
  height:max(30px,4vh);
  font-size:max(10px,1vw);
  justify-content:center;
  align-items:center;
  margin-bottom:20px;
  cursor:pointer;
`;
