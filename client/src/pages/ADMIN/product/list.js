import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProductAdmin = (props) => {

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }} className="card">
          <div className="d-flex gap-5 card-header card-header-primary">
            <div>
              <h4 className="card-title ">&ensp;PRODUCT</h4>
              <p className="card-category"> Here is a subtitle for this table</p>
            </div>
            <div>
              <button className="btn-primary ml-5">
                <NavLink activeClassName="active" to="/admin/addproduct" className="nav-link text-light">ADD PRODUCT</NavLink>
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
                      Price
                        </th>
                    <th>
                      Images
                        </th>
                    <th>
                      Shipping
                        </th>
                    <th>
                      Action
                       </th>
                  </tr></thead>
                {props.products ? (props.products.map((product, index) => {
                  const nameShipping = product.shipping ? "Còn Hàng" : "Hết Hàng";
                  const statusClass = product.shipping ? "success" : "danger";
                  return <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>$ {product.price}</td>
                      <td><img src={`http://localhost:4000/api/product/photo/${product._id}?time=${new Date}`} style={{ width: "5rem" }} /></td>
                      <td>
                        <span className={`badge badge-${statusClass}`}>
                           {nameShipping}
                        </span>                      
                      </td>
                      <td>
                        <button onClick={() => props.onDeleteProduct(product._id)}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                           &emsp;
                           <button><Link to={`/admin/editproduct/${product._id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link></button>
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

export default ProductAdmin
