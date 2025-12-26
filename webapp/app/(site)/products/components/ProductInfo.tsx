import React from "react";

import { IProduct } from "../types";
import AddProductToBasckate from "./AddProductToBasckate";
interface IProductInfo {
    data: IProduct;
}
const ProductInfo: React.FC<IProductInfo> = ({ data }) => {
    const ratingStar = Array.from(Array(data?.rating).keys());
    const unRating = 5 - ratingStar.length;
    const unRatingStar = Array.from(Array(unRating).keys());
    return (
        <div className="flex flex-col px-4 lg:px-0">
            <p className="text-xl font-bold py-2">{data.productName} </p>
            <div className="flex items-center py-2">
                {ratingStar?.map((i) => {
                    return (
                        <svg
                            key={`ratingStar-${i}`}
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    );
                })}

                {unRatingStar?.map((i) => {
                    return (
                        <svg
                            key={i}
                            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    );
                })}
            </div>

            <div className="flex items-center my-2">
                <span className="font-bold">{data.price}$</span>
                <span className="line-through mx-4 text-gray-300">
                    {data.discontPrice}$
                </span>
                {/* <span className="bg-red-100 text-[#FF3333] px-2 py-1 rounded-[1rem] text-sm">
                    {data.discountPercentage}%
                </span> */}
            </div>
            <span className=" text-lg">{data.description}</span>
            {/* <ColorSelction active={0} colors={data.color} />
      <SizeSelect size={data.size} />
     */}
            <AddProductToBasckate data={data} />
        </div>
    );
};

export default ProductInfo;
