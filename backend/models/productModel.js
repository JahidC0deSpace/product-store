import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //to know when the product is created and updated
  }
);

const Product = mongoose.model("Product", productSchema); //creates a collection named products in mongodb
export default Product;
