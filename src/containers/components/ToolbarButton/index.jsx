import React from 'react';
import {Button} from './Styles';

export default function ToolbarButton(props) {
    const { icon } = props;
    return (
      <Button className={`toolbar-button ${icon}`} />
    );
}