import React from 'react'
import { Space } from 'antd';
import parse from 'html-react-parser'
import { InfoCircleOutlined } from '@ant-design/icons';

import './Info.css'

export const Info = ({value}) => {
    return (
        <div className="space-block">
            <Space align="start" >
                <InfoCircleOutlined/>
                <p>{parse(value)}</p>
            </Space>
        </div>
    )
}
