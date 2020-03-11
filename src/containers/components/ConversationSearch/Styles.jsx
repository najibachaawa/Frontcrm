import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    background: #f4f4f8;
    padding: 8px 10px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    &:focus {
        text-align: left;
    }
    &::placeholder {
        text-align: center;
    }
`;