import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const ProductAdminAdd = ({categorys, onAddproduct }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        //  console.log(data)
          onAddproduct(data);
         history.push("/admin/product")
    }

    return (    
       <>
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                Name:
                <input type='text' id="product-name" {...register('name',{ required: true}) }/>
                {errors.name && errors.name.type === "required" && <span className="text-danger">This is required</span>}
               <br/> 
               Price:
                <input type='number' id="product-price" {...register('price',{ required: true})}/>
                {errors.price && errors.price.type === "required" && <span className="text-danger">This is required</span>}<br/>
                Quantity:
                <input type='text' id="product-quantity" {...register('quantity',{ required: true}) }/>
                {errors.quantity && errors.quantity.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               Sold:
                <input type='text' id="product-sold" {...register('sold',{ required: true}) }/>
                {errors.sold && errors.sold.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               Photo:
                <input type='file' id="product-photo" {...register('photo',{ required: true}) }/>
                {errors.photo && errors.photo.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               Shipping:
               {/* <input type='text' id="product-shipping" {...register('shipping',{ required: true}) }/> */}
               <select id="product-shipping" {...register('shipping',{ required: true}) }>                
                <option value='true'>Còn Hàng</option>
                <option value='false'>Hết Hàng</option>    
                </select>
               <br/>
               Description:
                <textarea rows="5" type='text' id="product-description" className="form-control" {...register('description',{ required: true}) }></textarea>
                {errors.description && errors.description.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               Categoryid
               <select id="product-categoryid" {...register('categoryid',{ required: true}) }>
                  <option value=""></option>  
                    {categorys.map((category,index)=>(
                  <option key={index} value={`${category._id}`}>{category.name}</option>
            ))
            }
               </select>
              
                {errors.categoryid && errors.categoryid.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
                <button className="btn-danger p-2 mt-3" type="submit">Add product</button>
            </form>
        </div>
        </>
    )
}

export default ProductAdminAdd
