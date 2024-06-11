import React from 'react';
import { Provider } from 'react-redux';
import ProductStore from './Redux/productsStore';
import Cart from './Components/Cart';

const App = () => {
  return (
    <Provider store={ProductStore}>
      <div>
        <h1 className='text-center roboto-black-italic'>React Redux Task</h1>
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
