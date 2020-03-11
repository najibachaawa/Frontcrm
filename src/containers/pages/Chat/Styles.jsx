import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    background: #eeeef1;
    grid-template-columns: 350px auto;
    grid-template-rows: 60px auto 60px;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
`;
export const Sidebar = styled.div`
    position: relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: white;
    grid-row-start: 1;
    grid-row-end: span 3;
`;
export const Content = styled.div`
    position: relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: white;
    grid-row-start: 1;
    grid-row-end: span 3;
`;