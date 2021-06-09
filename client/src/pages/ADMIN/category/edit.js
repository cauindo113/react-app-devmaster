import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import CategoryAPI from '../../../api/categoryAPI';

const CategoryAdminEdit = ({onEditcategory}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let { id } = useParams();
    const [category, setCategory] = useState({});
     
    useEffect(() => {
     const getCategory = async () => {
         try {
            const { data: dataCategory} = await CategoryAPI.get(id);
            setCategory(dataCategory)
            //  reset(dataCategory)
            console.log("data category",dataCategory)
         } catch (error) {
            console.log(error)
         }
     };
     getCategory();
    }, [])

    const onHandleSubmit = async (data) => {
        //  console.log(data)
        await onEditcategory(id, data);
        history.push("/admin/category")
         
    }
    return (
        <div>
             <h2>Edit Category</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)} >
                Name:
                <input type='text' {...register('name',{ required: true}) } defaultValue={category.name} id="edit-category-name" />
               <br/>
               Name:
                <input type='file' {...register('photo',{ required: true}) } id="edit-category-photo" />
                {Object.keys(category).length > 0 && <img style={{width: "15rem", height: "15rem"}} src={`http://localhost:4000/api/category/photo/${category._id}?time=${new Date() - 1}`}></img>}
               <br/>
               <input className="btn-danger p-2 mt-3" value='Update Category' type="submit"/>

            </form>
        </div>
    )
}

export default CategoryAdminEdit
