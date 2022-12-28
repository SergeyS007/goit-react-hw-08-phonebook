import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

export const Register = () => {
  return (
    <div>
      <h2 className={css.title}>Registration</h2>
      <RegisterForm />
    </div>
  );
};
