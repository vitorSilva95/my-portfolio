import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
    p {
      font-size: max(20px, 1.5vw);
      border-right: 2px solid white;
      text-align:center;
      animation: blinkCursor 700ms infinite normal, typing 4s steps(25) 1s normal both;
      white-space: nowrap;
      overflow: hidden;
      position: absolute;
    }
  
    @keyframes typing {
      from {
        width:0;
      }
      to {
        width: 19em;
      }
    }
  
    @keyframes blinkCursor {
      from {
        border-right-color: white;
      
      }
      to{
        border-right-color: transparent;
      }
    }
`;

export const Link = styled.a`
  color:white;
  text-decoration:none;
  font-size: max(12px, 0.8vw);
  margin-top: 400px;
  background-color:#4e42d4;
  border-radius:40px;
  padding:20px;
`;
