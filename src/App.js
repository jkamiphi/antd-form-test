import React from 'react'
import { Row, Col, Form, Button } from 'antd'

import FormBuilder from 'antd-form-builder'

import './App.css';
import { CardRadio, ColorRadio, Info, Avatar, Preview } from './components';
import { useForm } from './context';

function App() {
  const form = useForm();
  const forceUpdate = FormBuilder.useForceUpdate();

  const meta = {
    
    formItemLayout: null, // Must set this for inline layout
    colon: true,
    fields: [
      {
        key: 'title',
        render() {
          return (
            <fieldset>
              <h2>Configuración</h2>
            </fieldset>
          )
        },
      },
      { 
        key: 'logo', 
        label: 'Logo del espacio', 
        forwardRef: true,
        widget: Avatar,
        extra: <Info value="Este logo identificará tu espacio entre el resto.<br/> Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente." />, 
      },   
      { 
        key: 'name', 
        label: 'Nombre del espacio', 
        placeholder: 'Ep: Mi espacio de trabajo', 
      },     
      { 
        key: 'url', 
        label: 'URL del espacio (dirección web)', 
        placeholder: 'Ep: mi.dominio', 
        widgetProps: {suffix: '.dofleini.com'},
        extra: <Info value="Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)<br/><br/> Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro."/>,
      },

      {
        key: 'working',
        label: '¿Cuántas personas trabajarán contigo, incluyéndote a ti?',
        widget: 'radio-group',
        buttonGroup: true,
        options: ['Sólo yo', '2 - 10', '11 - 25', '26 - 50', '51 - 100', '500+'],
        initialValue: 'Sólo yo',
        extra: <Info value="Este logo identificará tu espacio entre el resto. <br/> Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente."/>
      },
      {
        key: 'color',
        label: 'Color del tema',
        widget: 'radio-group',
        initialValue: '#E59100',
        buttonGroup: true,
        children: ['#39B0FF', '#04B58B', '#3E9C4B', '#B6BC00', '#E59100', '#E55C00', '#EE1F50', 'custom'].map(key => <ColorRadio color={key} />),
      },
      {
        key: 'privacy',
        label: 'Privacidad del espacio',
        initialValue: 'Privado',
        widgetProps: { style: { display: 'inline-flex' } },
        widget: 'radio-group',
        children: [
          ['Privado', 'El contenido será visible sólo para tí y los miembros de tu Organización.'], 
          ['Público', 'Cualquiera con el vínculo podrá ver la actividad de tu Organización']
        ].map(([value, descripion]) => <CardRadio value={value} description={descripion} />)
      }
    ],
  }

  return (
    <Row>
      <Col xs={24} md={12}>
        <div className="form-block">
          <Form form={form} layout="vertical" onValuesChange={forceUpdate} size="large">
            <FormBuilder meta={meta} form={form}  />
            <Form.Item className="form-footer" wrapperCol={{ span: 24}}>
              <Button htmlType="submit" type="primary">
                Guardar cambios
              </Button>
              <Button
                onClick={() => {
                  form.resetFields()
                }}
                style={{ marginLeft: '15px' }}
              >
                Descartar
              </Button>
          </Form.Item>
          </Form>
        </div>
    </Col>
      <Col md={12} className="view-mode">
        <Preview />
      </Col>
    </Row>
  );
}

export default App;

