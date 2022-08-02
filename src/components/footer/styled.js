import styled from 'styled-components';

export const Div = styled.div`
  box-shadow: inset 0 0 1em #120c56, 0 0 1em black;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
  margin-top:300px;
  width:100%;
`;

export const ContainerFooter = styled.footer`
  width:100%;

    ol {
      padding:0;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-wrap:wrap;
    }
  
    li {
      text-align:center;
      list-style: none;
      padding:10px 50px;
    }
`;

export const Title = styled.h1`
  text-align:center;
  margin-bottom:100px;
  margin-top:100px;
`;

export const Link = styled.a`
  text-decoration:none;
  cursor:pointer;
  color:white;
`;

export const P = styled.p`
  font-size:15px;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  background: white;
	border-radius: 15px;
	width: 200px;
	height: 50px;
	position: relative;
  visibility: ${(props) => (props.isCopied ? 'visible' : 'hidden')};
`;
