import express from 'express';
const router = express.Router();

import { requireSignin, isAdmin, isAuth } from '../controllers/auth';
import { userById } from '../controllers/user';
import { create, productByID, read, remove, update, list, listRelated, listBySearch, listCategories, photo } from "../controllers/product";
import { categoryById } from '../controllers/category';

router.get("/products", list);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories/:categoryId", listCategories);
router.post("/products/search", listBySearch);
router.get("/product/photo/:productId", photo)

// router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.post("/product/create", create);
router.get("/product/:productId", read);
// router.delete("/product/:productId/:userId", requireSignin, isAuth, isAdmin, remove);
router.delete("/product/:productId", remove);
// router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, update);
router.put("/editproduct/:productId", update);


router.param("userId", userById);
router.param("categoryId", categoryById)
router.param("productId", productByID)

module.exports = router;