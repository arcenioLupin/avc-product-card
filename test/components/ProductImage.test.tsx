import React from "react";
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from "../../src/components";
import { product2 } from "../data/products";


describe('ProductImage', () => {
    test('debe mostrar el componente con una imagen personalizada', () => { 
        const wrapper = renderer.create(
            <ProductImage img="hola-mundo.jpg"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('debe mostrar el componente  con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage img={product2.img}/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
})