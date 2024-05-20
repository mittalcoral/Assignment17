import React from 'react';
import { ProductProvider } from './ProductContext.jsx';
import ProductList from './ProductList.jsx';
import Header from './Header.jsx';

const App = () => (
  <ProductProvider>
    <div className="App">
      <Header />
      <ProductList />
    </div>
  </ProductProvider>
);

export default App;
