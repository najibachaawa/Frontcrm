import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    background: white;
    border-top: 1px solid #eeeef1;
    position: fixed;
    width: 750px;
    height:70px;
    bottom: 0px;
    @supports (backdrop-filter: blur(20px)) {
        .compose {
          border: none;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
        }
      }
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    font-size: 14px;
    height: 40px;

    background: none;
`;
