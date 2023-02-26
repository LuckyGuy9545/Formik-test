import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
//* yup плагин (npm), нужен для легкой валидации формы
import * as yup from 'yup';

//*описываешь для формы метод валидации
const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  //* там где {ResetForm} - дестру-я actions с Formiks, есть разные actions(в доку-ии) (values, actions)
  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
  };
  return (
    //* onSubmit вешаем не на Form а на Formik
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
          {/* //*component='div' для стилизации */}
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
/* //-- как работает 
<Formik><Formik/> - нужен как обвертка
<Form> - компонент вместо обычного <form>
<Field> - вмессто обычного <input>
<ErrorMessage> - выводит ошибки
*/
