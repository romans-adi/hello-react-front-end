import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/slice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    height: '100vh',
    fontSize: '36px',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {greeting.loading && <div>Loading...</div>}
      {!greeting.loading && greeting.error ? (
        <div>
          Error:
          {' '}
          {greeting.error}
        </div>
      ) : null}
      {!greeting.loading && greeting.greeting ? (
        <div>
          <h1>{greeting.greeting}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Greeting;
