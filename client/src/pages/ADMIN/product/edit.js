import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import ProductAPI from '../../../api/productAPI';

const ProductAdminEdit = ({categorys,onEditproduct}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let { id } = useParams();
    const [product, setProduct] = useState({});
     
    useEffect(() => {
     const getProduct = async () => {
         try {
            const { data: dataProduct} = await ProductAPI.get(id);
            setProduct(dataProduct)

            console.log("data product",dataProduct)
         } catch (error) {
            console.log(error)
         }
     };
     getProduct();
    }, [])

    const onHandleSubmit = async (data) => {
        //  console.log(data)
        await onEditproduct(id, data);
        history.push("/admin/product")
         
    }
    // console.log("dcdcd", categorys)
    return (
        <div style={{marginBottom: "2rem"}}>
        <h2>Edit Product</h2>
        {Object.entries(product).length >= 1 &&
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            Name:
            <input type='text' id="edit-product-name" {...register('name') } defaultValue={product.name}/>
           <br/> 
           Price:
            <input type='number' id="edit-product-price" {...register('price')} defaultValue={product.price}/>
           <br/> Quantity:
            <input type='text' id="edit-product-quantity" {...register('quantity')} defaultValue={product.quantity}/>
           <br/>
           Sold:
            <input type='text' id="edit-product-sold" {...register('sold',{ required: true}) } defaultValue={product.sold}/>
           <br/>
           Photo:
           {/* <input type='text' id="edit-product-photo" {...register('photo') } defaultValue={`http://localhost:4000/api/product/photo/${product._id}?time=${new Date() - 1}`}/> */}
            <input type='file' id="edit-product-photo" {...register('photo',{ required: true}) }/>
            {Object.keys(product).length > 0 && <img style={{width: "6rem", height: "6rem"}} src={`http://localhost:4000/api/product/photo/${product._id}?time=${new Date() - 1}`}></img>}
           <br/>
           Shipping:
             <input type="text" id="edit-product-shipping" {...register('shipping') } defaultValue={product.shipping} hidden/>
           <select id="edit-product-shipping" {...register('shipping',{ required: true}) }>
               <option defaultChecked={product.shipping == true} value="true">Còn Hàng</option>
               <option defaultChecked={product.shipping != true} value="false">Hết hàng</option>
           </select>
           <br/>
           Description:
            <textarea rows="5" type='text' id="edit-product-description" className="form-control" {...register('description',{ required: true}) } defaultValue={product.description}></textarea>
           <br/>
           Categoryid
          <select id="edit-product-categoryid" {...register('categoryid',{ required: true}) }>
                {categorys.map((category,index)=>{ 
              if (category._id == product.category) {
                return <option key={index} value={`${category._id}`} selected>{category.name}</option>      
            } else {
                return <option value={`${category._id}`}>{category.name}</option> 
            }
            })
           }
           </select>
          
           <br/>
            <button className="btn-danger p-2 mt-3" type="submit">Edit product</button>
        </form>
      }
    </div>
    )
}

export default ProductAdminEdit
