"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "../types";
import useAddToBasket from "@/app/store/basket";
interface IAddProductToBasckate {
  data: IProduct;
}
const AddProductToBasckate: React.FC<IAddProductToBasckate> = ({ data }) => {
  const [count, setCount] = useState(1);
  // const [prductBasket, setPrductBasket] = useState<ProductBasket | undefined>(
  //   undefined
  // );
  const { setProductBasket, incrementProductCount, products, updateStore } =
    useAddToBasket();
  // const { sizeSelect, colorSelect } = useSizeAndColor();
  const addToBaskate = () => {




    setProductBasket(data);


  };



  const changeCount = (type: string, id: number, count: number) => {
    if (type === "increase") {
      updateStore(id, count + 1);
    } else {
      updateStore(id, count - 1);
    }
  };
  return (
    <div className="flex items-center  border-t-2 border-ec-gray py-4">
      <div className=" flex items-center justify-between bg-ec-gray rounded-full w-[30%] lg:w-[20%]">
        <button
          onClick={() => changeCount("decrease", data.id, count)}
          className="font-bold p-1 text-2xl w-fit ms-2"
        >
          -
        </button>
        <span className="font-bold text-xl w-fit">{count}</span>
        <button
          onClick={() => changeCount("increase", data.id, count)}
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
