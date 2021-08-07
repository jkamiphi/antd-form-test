import React from 'react';
import { Radio, Space } from 'antd';
import './CardRadio.css';

export const CardRadio = ({value, description}) => {
    return (
            <Radio value={value} className="card-radio-wrapper">
                <Space direction="vertical">
                    <label>{value}</label>
                    <label className="card-radio-description">{description}</label>
                </Space>
            </Radio>
        
    )
}
