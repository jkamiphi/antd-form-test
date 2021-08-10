import React, {useState} from 'react';
import { Upload, Row, Col, Avatar as Image, Button, message } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';

export const Avatar = (props) => {
  const [state, setState] = useState({
    loading: false,
  });
  

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setState({ loading: true });
      return;
    }
    getBase64(info.file.originFileObj, imageUrl =>
      setState({
        imageUrl,
        loading: false,
      }),
    );
  };


  return (
    <Row gutter={10} align='middle'>
      <Col md={4} xs={6}>
        <Image size={67} src={state.imageUrl} icon={<UserOutlined />}/>
      </Col>
      <Col md={8} xs={18}>        
        <Upload 
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <Button>
            <UploadOutlined/>
            Subir logo
          </Button>
        </Upload>
      </Col>
    </Row>
  );

}
   
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}