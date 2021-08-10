import React from 'react';
import { Row, Col } from 'antd';

import './App.css';
import { FormView, Preview } from './components';

function App() {
  return (
    <Row>
      <Col xs={24} md={12}>
        <FormView />
      </Col>
      <Col md={12} className="view-mode">
        <Preview />
      </Col>
    </Row>
  );
}

export default App;

