import React from 'react'
import Header from '../components/Header'

const Website = (props) => {
    return (
        <> 
         <Header /> 
       <div className="_main">
           {props.children}
       </div> 
       <div className="section_footer">
                <div className="container">
                    <div className="mail_section">
                        <div className="row">
                            <div className="col-sm-6 col-lg-2">
                                <div><a href="#"><img src="images/footer-logo.png" /></a></div>
                            </div>
                            <div className="col-sm-6 col-lg-2">
                                <div className="footer-logo"><img src="images/phone-icon.png" /><span><a className="map_text" href="tel:0337564303">(+84) 337564303</a></span></div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-logo"><img src="images/email-icon.png" /><span className="map_text">cauindo113@gmail.com</span></div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                                        <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                                        <li><a href="#"><img src="images/in-icon.png" /></a></li>
                                        <li><a href="#"><img src="images/google-icon.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="footer_section_2">
                        <div className="row">
                            <div className="col-sm-4 col-lg-2">
                                <p className="dummy_text"> ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur  ipsum dolor sit amet,</p>
                            </div>
                            <div className="col-sm-4 col-lg-2">
                                <h2 className="shop_text">Address </h2>
                                <div className="image-icon"><img src="images/map-icon.png" /><span className="pet_text">No 40 Baria Sreet 15/2 NewYork City, NY, United States.</span></div>
                            </div>
                            <div className="col-sm-4 col-md-6 col-lg-3">
                                <h2 className="shop_text">Our Company </h2>
                                <div className="delivery_text">
                                    <ul>
                                        <li>Delivery</li>
                                        <li>Legal Notice</li>
                                        <li>About us</li>
                                        <li>Secure payment</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <h2 className="adderess_text">Products</h2>
                                <div className="delivery_text">
                                    <ul>
                                        <li>Prices drop</li>
                                        <li>New products</li>
                                        <li>Best sales</li>
                                        <li>Contact us</li>
                                        <li>Sitemap</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-2">
                                <h2 className="adderess_text">Newsletter</h2>
                                <div className="form-group">
                                    <input type="text" className="enter_email" placeholder="Enter Your email" name="Name" />
                                </div>
                                <button className="subscribr_bt">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">DEVMASTER CAUINDO</div>

            <script src="js/jquery.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
        </>
    )
}

export default Website
