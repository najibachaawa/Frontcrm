import styled from "styled-components";

export const ToolbarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    font-weight: 500;
    border-bottom: 1px solid #eeeef1;
    position: sticky;
    top: 0px;
`;
export const ToolbarTitle = styled.h1`
    margin: 0;
    font-size: 16px;
    font-weight: 800;
`;

export const LeftItems = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
`;
export const RightItems = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: row-reverse;
`;