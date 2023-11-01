const ProductModel = require("../models/products");


exports.createProduct = async (req , res)=>{
    try {
        const productData = req.body;
    
        // Create a new product using the Product model
        const newProduct = new ProductModel(productData);
    
        // Save the product to the database
        await newProduct.save();
        const savedProduct = await ProductModel.findById(newProduct._id).exec();
    
        res.status(201).json({ message: 'Product created', 
        data : savedProduct
        // productId: newProduct._id
     });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating product' });
      }
}

exports.getProducts = async (req , res) =>{
    try {
        const products = await ProductModel.find().exec();
        res.status(200).json({ success : true , data : products});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving products' });
      }
}