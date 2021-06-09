import React from 'react'
import { Link } from "react-router-dom";
const product = (props) => {
    return (
        <>
           <div className="collection_text">Shoes</div>
    <div className="collection_section layout_padding">
    	<div className="container">
    		<h1 className="new_text"><strong>New Arrivals Products</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	</div>
    </div>
    <div className="layout_padding gallery_section">
    	<div className="container">
    		<div className="row">
			{props.products ? (props.products.map((product, index) => {
                        return <div key={index} className="col-sm-4">
						<div className="best_shoes">
							<p className="best_text">{product.name}</p>
							<div className="shoes_icon"><Link to={`/product/${product._id}`}><img className="img_product" src={`http://localhost:4000/api/product/photo/${product._id}`} /></Link></div>
							<div className="star_text">
								<div className="left_part">
									<ul>
										<li><a href="#"><img src="images/star-icon.png"/></a></li>
										<li><a href="#"><img src="images/star-icon.png"/></a></li>
										<li><a href="#"><img src="images/star-icon.png"/></a></li>
										<li><a href="#"><img src="images/star-icon.png"/></a></li>
										<li><a href="#"><img src="images/star-icon.png"/></a></li>
									</ul>
								</div>
								<div className="right_part">
									<div className="shoes_price">$ <span style={{color: "#ff4e5b"}}>{product.price}</span></div>
								</div>
							</div>
						</div>
					</div>  
                     })) : null}
				
    		</div>
    		
    		<div className="buy_now_bt">
    			<button className="buy_text">Buy Now</button>
    		</div>
    	</div>
    </div>
        </>
    )
}

export default product
