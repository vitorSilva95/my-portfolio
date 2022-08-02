import styled from 'styled-components';

export const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:150px;
  padding:10px;
    &:hover {
      span {
        background-color:#4e42d4;
      }
      div {
        transform: translateY(-15px);
        transition: 0.5s;
      }
    }

    span {
      width: 100%;
      height: 3px;
    }
`;
