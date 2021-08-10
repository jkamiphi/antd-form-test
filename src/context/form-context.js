import { Form } from 'antd';
import React from 'react';

import FormBuilder from 'antd-form-builder';

const FormContext = React.createContext();

export const FormProvider = props => {
  let [form] = Form.useForm();

  const forceUpdate = FormBuilder.useForceUpdate();

  return <FormContext.Provider value={{form, forceUpdate}} {...props} />
}

export const useForm = () => {
    const context = React.useContext(FormContext);

    if(!context) {
        throw new Error("useForm debe estar dentro del context");
    }

    return context;
}