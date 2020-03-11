import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
        background: #eeeef1;
        cursor: pointer;
    }
`;
export const Content = styled.div`
`;

export const Avatar = styled.img`
    width: 50px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
`;
export const Snippet = styled.p`
    font-size: 14px;
    color: #888;
    margin: 0;
`;