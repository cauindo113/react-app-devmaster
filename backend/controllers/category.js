import Category from '../models/category'
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

export const create = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) =>{
       if(err){
           return res.status(400).json({
               error: "Them danh muc khong thanh cong"
           })
       }
       const { name } = fields;
       if(!name){
          return res.status(400).json({
              error: "Ban can nhap day du thong tin"
          })
       }
       let category = new Category(fields);
        // let product = req.product;
       // 1kb = 1000
       // 1mb = 100000
       if(files.photo){
            if(files.photo.size > 1000000){
                res.status(400).json({
                    error: "Ban nen uppload anh duoi 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.path;
       }
       category.save((err, data) => {
        if(err){
            res.status(400).json({
                error: "Khong them duoc danh muc"
            })
        }
        res.json(data)
    });

    });
}
export const update = (req, res) => {
    // if (req.url == "/upload" && req.method.toLowerCase() == "post") {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    // form.uploadDir  = "uploads/"
    form.parse(req, (err, fields, files) =>{
       if(err){
           return res.status(400).json({
               error: "Sua danh muc khong thanh cong"
           })
       }
       const { name } = fields;
       if(!name){
          return res.status(400).json({
              error: "Ban can nhap day du thong tin"
          })
       }
        // let product = new Product(fields);
        let category = req.category;
        category = _.assignIn(category, fields);
       // 1kb = 1000
       // 1mb = 100000
       if(files.photo){
            if(files.photo.size > 100000000){
                res.status(400).json({
                    error: "Ban nen uppload anh duoi 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.path;
       }
       category.save((err, data) => {
        if(err){
            res.status(400).json({
                error: "Khong sua duoc danh muc"
            })
        }
        res.json(data)
      });

    });
}
// }

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            deletedCategory,
            message: "Category deleted successfully"
        })
    })
}
export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category){
            res.status(400).json({
                error: "Khong tim thay danh muc"
            })
        }
        req.category = category;
        next()
    })
}
export const read = (req, res) => {
    return res.json(req.category);
}
export const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? +req.query.limit : 6;

    Category.find()
        .select("-photo")
        // .populate('category')
        // .sort([[order, sortBy]])
        // .limit(limit)
        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Category not found"
                })
            }
            res.json(data)
        })
}
export const photo = (req, res, next) => {
    if (req.category.photo.data) {
        res.set("Content-Type", req.category.photo.contentType);
        return res.send(req.category.photo.data);
    }
    next();
}

