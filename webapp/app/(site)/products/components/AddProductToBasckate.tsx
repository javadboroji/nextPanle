"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "../types";
interface IAddProductToBasckate {
  data: IProduct;
}
const AddProductToBasckate: React.FC<IAddProductToBasckate> = ({ data }) => {
  const [count, setCount] = useState(1);
  // const [prductBasket, setPrductBasket] = useState<ProductBasket | undefined>(
  //   undefined
  // );
  // const { setProductBasket, incrementProductCount, products } =
  //   useAddToBasket();
  // const { sizeSelect, colorSelect } = useSizeAndColor();
  const addToBaskate = () => {
    // const productSumury = {
    //   image: data.image,
    //   title: data.title,
    //   price: data.price,
    //   _id: data._id,
    //   size: sizeSelect,
    //   color: colorSelect,
    //   count: count,
    // };

    // const basketHasProduct = products.some(
    //   (item) => item._id === productSumury._id
    // );
    // if(count>0){
      
    //   if (!basketHasProduct) setProductBasket(productSumury);
    //   if (basketHasProduct)
    //     incrementProductCount(productSumury?._id ?? "", count);
    // }
  };



  const changeCount = (type: string) => {
    if (type === "increase") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  return (
    <div className="flex items-center  border-t-2 border-ec-gray py-4">
      <div className=" flex items-center justify-between bg-ec-gray rounded-full w-[30%] lg:w-[20%]">
        <button
          onClick={() => changeCount("decrease")}
          className="font-bold p-1 text-2xl w-fit ms-2"
        >
          -
        </button>
        <span className="font-bold text-xl w-fit">{count}</span>
        <button
          onClick={() => changeCount("increase")}
          className="font-bold p-1 text-2xl w-fit me-2"
        >
          +
        </button>
      </div>
      <button
        className="flex-1 bg-black rounded-full p-2 text-white ms-4"
        onClick={() => addToBaskate()}
      >
      افزودن به سبد خرید 
      </button>
    </div>
  );
};

export default AddProductToBasckate;
