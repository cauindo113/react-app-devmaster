import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const CategoryAdmin = (props) => {
    return (
        <>
           <div style={{width: "100%"}}>
              <div style={{width: "100%"}} className="card">
              <div className="d-flex gap-5 card-header card-header-primary">
                  <div>
                    <h4 className="card-title ">&ensp;CATEGORY</h4>
                    <p className="card-category"> Here is a subtitle for this table</p>
                  </div>
                <div>
                    <button className="btn-primary ml-5">
                    <NavLink activeClassName="active" to="/admin/addcategory" className="nav-link text-light">ADD CATEGORY</NavLink>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr><th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Images
                        </th>
                       <th>
                         Action
                       </th>
                      </tr></thead>
                      {props.categorys ? (props.categorys.map((category, index) => {
                        console.log(category);
                        return <tbody key={index}>
                        <tr> 
                          <td>{index + 1}</td>
                           <td>{category.name}</td>
                           <td><img src={`http://localhost:4000/api/category/photo/${category._id}?time=${new Date()}`} style={{width: "5rem"}}/></td>
                          
                           <td>
                               <button onClick={() => props.onDeleteCategory(category._id)}>
                               <i className="fa fa-trash" aria-hidden="true"></i>
                           </button>
                           &emsp;
                           <button><Link to={`/admin/editcategory/${category._id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link></button>
                           </td>        
                        </tr>  
                      </tbody>
                     })) : null}
                    </table>
                  </div>
                </div>
              </div>
            </div> 
        </>
    )
}

export default CategoryAdmin
