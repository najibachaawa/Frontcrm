import styled from "styled-components";

export const Button = styled.i`
    color: #007aff;
    font-size: 28px;
    transition: all 0.1s;
    &:hover {
        cursor: pointer;
        color: #0063ce;
    }
    &:active {
        color: #007aff;
        opacity: 0.25;
    }
`;