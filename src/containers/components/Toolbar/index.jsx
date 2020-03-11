import React from 'react';
import { ToolbarContainer, ToolbarTitle, LeftItems, RightItems } from './Styles';

const Toolbar = (props) => {
    const { title, leftItems, rightItems } = props;
    return (
      <ToolbarContainer>
        <LeftItems>{leftItems}</LeftItems>
        <ToolbarTitle>{title}</ToolbarTitle>
        <RightItems>{rightItems}</RightItems>
      </ToolbarContainer>
    );
}
export default Toolbar;