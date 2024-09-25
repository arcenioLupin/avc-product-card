# AVC-Product-Card

Este es un paquete de pruebas de despliegue NPM

### Arcenio Vilca

## Ejemplo

```
   import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'avc-product-card';
```

```
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

```
