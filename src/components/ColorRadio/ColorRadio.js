import React from 'react';
import { Radio} from 'antd';
import './ColorRadio.css';

export const ColorRadio = ({color}) => 
    <Radio.Button value={color} style={{backgroundColor: color}} className="color-radio" />;
    

