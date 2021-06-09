import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../../api/productAPI';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])
    return (
        <>
        <div className="collection_text">Shoes Detail</div>
    <div className="collection_section layout_padding">
    	<div className="container">
    		<h1 className="new_text"><strong>Shoes Detail</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	</div>
    </div>
        <div className="collectipn_section_3 layout_padding">
                 <div className="container" >
        <div className="row" style={{padding: "1rem"}}>
            <div className="col-3">
              <img src={`http://localhost:4000/api/product/photo/${product._id}`} />
            </div>
            <div className="col-4">
             <h3>{product.name}</h3>$ {product.price}<br/>Còn Hàng: {product.sold}<br/><button className="btn-danger p-2">Add To Cart</button><br/><br/>
             <strong>Mô Tả: </strong> {product.description}
            </div>
        </div>
        
        </div>
        </div>

        </>
    )
}

export default ProductDetail
