import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const CategoryAdminAdd = ({ onAddcategory }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = async (data) => {
          console.log("cdcd",data.name)
          if(data.name.length > 3){
              alert("Category khong qua 3 ky tu");
          } else {
               await onAddcategory(data);
               history.push("/admin/category")   
          }
        
    }
    return (
        <div>
             <h2>Add Category</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                Name:
                <input type='text'  id="category-name" {...register('name',{ required: true}) }/>
                {errors.name && errors.name.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               Photo:
                <input type='file' id="category-photo" {...register('photo',{ required: true}) } />
                {errors.photo && errors.photo.type === "required" && <span className="text-danger">This is required</span>}
               <br/>
               <button className="btn-danger p-2 mt-3" type="submit">Add category</button>
            </form>
        </div>
    )
}

export default CategoryAdminAdd;
