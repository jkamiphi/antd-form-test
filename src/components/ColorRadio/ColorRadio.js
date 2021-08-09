import React, {useRef, useState, useEffect} from 'react';
import { Radio} from 'antd';
import './ColorRadio.css';

export const ColorRadio = ({color}) => {
    return (   
        <Radio.Button value={color} className="color-radio"  style={{backgroundColor: color}} > 
            <div className='circle' style={{backgroundColor: color}} />
        </Radio.Button>
    );
}
