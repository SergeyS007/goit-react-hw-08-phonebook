import css from './Home.module.css';

export const Home = () => {
  return (
    <div>
      <h1 className={css.title}>
        Your phonebook{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
