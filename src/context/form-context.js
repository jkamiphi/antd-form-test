import { Form } from 'antd';
import React from 'react';

const FormContext = React.createContext();

export const FormProvider = props => {
  const [form] = Form.useForm();

  return <FormContext.Provider value={form} {...props} />
}

export const useForm = () => {
    const context = React.useContext(FormContext);

    if(!context) {
        throw new Error("useForm debe estar dentro del context");
    }

    return context;
}