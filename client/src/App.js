import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAPI from './api/productAPI';
import CategoryAPI from './api/categoryAPI';
import Routers from './Router';

function App() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);

// CRUD PRODUCT
  useEffect(() => {

    const getProducts = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products)
        console.log(products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [])
  const add_product = async (addProduct) => {
    console.log(addProduct)
    
    try {
      let addProduct = new FormData()
      addProduct.append('name', document.querySelector('#product-name').value)
      addProduct.append('photo', document.querySelector('#product-photo').files[0])
      addProduct.append('category', document.querySelector('#product-categoryid').value)
      addProduct.append('quantity', document.querySelector('#product-quantity').value)
      addProduct.append('price', document.querySelector('#product-price').value)
      addProduct.append('sold', document.querySelector('#product-sold').value)
      addProduct.append('shipping', document.querySelector('#product-shipping').value)
      addProduct.append('description', document.querySelector('#product-description').value)
      const { data } = await ProductAPI.add(addProduct)
      setProducts([...products, data])
      // window.location.reload();

    } catch (error) {
      console.log(error)
    }

  }
  const edit_product = async (id) => {
    try {
      let product = new FormData()
      product.append('name', document.querySelector('#edit-product-name').value)
      product.append('photo', document.querySelector('#edit-product-photo').files[0])
      product.append('category', document.querySelector('#edit-product-categoryid').value)
      product.append('quantity', document.querySelector('#edit-product-quantity').value)
      product.append('price', document.querySelector('#edit-product-price').value)
      product.append('sold', document.querySelector('#edit-product-sold').value)
      product.append('shipping', document.querySelector('#edit-product-shipping').value)
      product.append('description', document.querySelector('#edit-product-description').value)
     const { data } = await ProductAPI.update(id, product);
      const newEditProduct = products.map(item => {
        if (item._id === id) {
          item = { ...item,
             name: data.name, 
             category: data.category,
             quantity: data.quantity,
             price: data.price,
             sold: data.sold,
             shipping: data.shipping,
             description: data.description
            }
        }
        return item;
      })
      setProducts(newEditProduct)
    } catch (error) {
      console.log(error)
    }
  }
  const delete_product = async (id) => {
    try {
      const checkRemove = window.confirm("Are you sure delete Product?")
      if(checkRemove) {
         await ProductAPI.remove(id)
      const newProduct = products.filter(product => product._id !== id);
      setProducts(newProduct)
      console.log(newProduct)
      }
     
      // window.location.reload();
    } catch (error) {
      console.log(error)
    }

  }
// CRUD CATEGORY
  useEffect(() => {

    const getCategorys = async () => {
      try {
        const { data: categorys } = await CategoryAPI.getAll();
        setCategorys(categorys)
        console.log(categorys)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorys();
  }, [])
  const add_category = async (addCategory) => {
    console.log(addCategory)
    
    try {
      let addCategory = new FormData()
      addCategory.append('name', document.querySelector('#category-name').value)
      addCategory.append('photo', document.querySelector('#category-photo').files[0])
     
      const { data } = await CategoryAPI.add(addCategory);
       setCategorys([...categorys, data])
      // window.location.reload();
      
    } catch (error) {
      console.log(error)
    }

  }
  const edit_category = async (id) => {
    try {
      let category = new FormData()
      category.append('name', document.querySelector('#edit-category-name').value)
      category.append('photo', document.querySelector('#edit-category-photo').files[0])
      const { data } = await CategoryAPI.update(id, category);
      const newEditCategory = categorys.map(item => {
        if (item._id === id) {
          item = { ...item, name: data.name }
        }
        return item;
      })
      setCategorys(newEditCategory)
    } catch (error) {
      console.log(error)
    }
  }
  const delete_category = async (id) => {
    try {
       const checkRemove = window.confirm("Are you sure delete Category?")
       if(checkRemove) {
      await CategoryAPI.remove(id)
     
      const newCategory = categorys.filter(category => category._id !== id);
      setCategorys(newCategory)
      console.log(newCategory)
       }
     
      // window.location.reload();
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <>
      <Routers
      // PROPS PRODUCT
        products={products}
        onAddproduct={add_product}
        onEditproduct={edit_product} 
        onDeleteProduct={delete_product}
      // PROPS CATEGORY
        categorys={categorys}  
        onAddcategory={add_category}  
        onEditcategory={edit_category}  
        onDeleteCategory={delete_category}
       />
    </>
  );
}

export default App;
