import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './layouts/admin';
import Website from './layouts/website';
import HomePage from './pages/WEBSITE/homepage';
import AboutPage from './pages/WEBSITE/about';
import ProductPage from './pages/WEBSITE/product';
import Err404Page from './pages/WEBSITE/errpage404';
import CategoryPage from './pages/WEBSITE/category';
import ContactPage from './pages/WEBSITE/contact';
import DashboardAdmin from './pages/ADMIN/dashboard/dashboardAdmin';
import CategoryAdmin from './pages/ADMIN/category/list';
import ProductAdmin from './pages/ADMIN/product/list';
import UserAdmin from './pages/ADMIN/user/list';
import ProductAdminAdd from './pages/ADMIN/product/add';
import CategoryAdminAdd from './pages/ADMIN/category/add';
import ProductDetail from './pages/WEBSITE/productDetail';
import Signup from './pages/WEBSITE/user/signup';
import CategoryAdminEdit from './pages/ADMIN/category/edit';
import ProductAdminEdit from './pages/ADMIN/product/edit';
import Signin from './pages/WEBSITE/user/signin';
import PrivateRoute from './pages/WEBSITE/auth/privateRoute';

const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?">
                        <Admin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <PrivateRoute exact path="/admin/dashboard">
                                    <DashboardAdmin />
                                </PrivateRoute>
                                <Route exact path="/admin/category">
                                    <CategoryAdmin {...props} />
                                </Route>
                                <Route exact path="/admin/product">
                                    <ProductAdmin {...props} />
                                </Route>
                                <Route exact path="/admin/addproduct">
                                    <ProductAdminAdd {...props} />
                                </Route>
                                <Route exact path="/admin/addcategory">
                                    <CategoryAdminAdd {...props} />
                                </Route>
                                <Route exact path="/admin/editcategory/:id">
                                <CategoryAdminEdit {...props}/>
                                </Route>
                                <Route exact path="/admin/editproduct/:id">
                                <ProductAdminEdit {...props}/>
                                </Route>
                                <Route exact path="/admin/users">
                                    <UserAdmin />
                                </Route>
                            </Switch>
                        </Admin>
                    </Route>
                    <Route>
                        <Website>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route exact path="/product">
                                    <ProductPage {...props} />
                                </Route>
                                <Route exact path="/product/:id">
                                    <ProductDetail />
                                </Route>
                                <Route exact path="/category">
                                    <CategoryPage />
                                </Route>
                                <Route exact path="/contact">
                                    <ContactPage />
                                </Route>
                                <Route exact path="/signup">
                                     <Signup/>
                                </Route>
                                <Route exact path="/signin">
                                     <Signin/>
                                </Route>
                                <Route exact path="*">
                                    <Err404Page />
                                </Route>
                            </Switch>
                        </Website>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers
