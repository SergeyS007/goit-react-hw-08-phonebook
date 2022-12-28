import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LogIn.module.css';

export const LogIn = () => {
  return (
    <div>
      <h2 className={css.title}>Log In</h2>

      <LoginForm />
    </div>
  );
};
