import styled from 'styled-components';

export const Div = styled.div`
  box-shadow: inset 0 0 1em #120c56, 0 0 1em black;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
  margin-top:200px;
  width:100%;
    h5 {
      padding:20px;
      font-size:max(13px,0.74vw);
        span {
          font-size:max(25px, 1.7vw);
        }
    }
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
      padding:0 20px;
    }
`;

export const Title = styled.h1`
  text-align:center;
  padding:20px;
  margin:30px 50px 80px 50px;;
`;

export const Link = styled.a`
  text-decoration:none;
  cursor:pointer;
  color:white;
  font-size:max(25px,2.4vw );
`;

export const P = styled.p`
  font-size:max(10px, 0.8vw);
  padding:12px;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  background: white;
	border-radius: 10px;
	position: relative;
  margin:20px;
  visibility: ${(props) => (props.isCopied ? 'visible' : 'hidden')};
`;
