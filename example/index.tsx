import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../dist/components';


const product = {
   id: '1',
   title: 'Coffe Mug-Card'
}

const App = () => {
  return (
    <>
 <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({reset, increaseBy, count, isMaxCountReached}) => (
          <>
            <ProductImage  />
            <ProductTitle  title={"Title coffee"} />
            <ProductButtons  />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
