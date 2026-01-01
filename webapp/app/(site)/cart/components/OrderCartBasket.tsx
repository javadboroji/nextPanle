"use client";
import useAddToBasket from "@/app/store/basket";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiTwotoneDelete } from "react-icons/ai";

function OrderCartBasket() {
    const { products, updateStore, removeProduct } = useAddToBasket();
    const changeCount = (type: string, id: number, count: number) => {
        if (type === "increase") {
            updateStore(id, count + 1);
        } else {
            updateStore(id, count - 1);
        }
    };
    const removieProduct = (id: number) => {
        removeProduct(id)
    }
    useEffect(() => { }, [products]);

    return (
        <div className="rounded-[8px] border-[1px] border-gray-100">
            {products?.map((product) => {
                return (
                    <div
                        key={product.id}
                        className="flex p-3 border-b-[1px] border-gray-100"
                    >
                        {/* <div className="lg:w-[20%] w-1/3">
                            <Image src={product.thumbnail} alt="product" className="rounded-xl" />
                        </div> */}
                        <div className="lg:w-[20%] w-1/3 relative">
                            <div className="absolute bottom-0 left-0 w-full h-full z-0">
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.thumbnail}`} alt="product" fill
                                    className="object-center  object-contain" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between px-4">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-start">{product.productName}</span>
                                <button onClick={() => removieProduct(product.id)}>
                                    <AiFillDelete size={18} color="red" />
                                </button>
                            </div>
                            {/* <div className="flex items-center">
                                <span>Size:</span>
                                <span className="mx-2">{product.size}</span>
                            </div> */}
                            {/* <div className="flex items-center">
                                <span>Color:</span>
                                <span
                                    className="w-4 h-4 flex mx-2 rounded-full"
                                    style={{ backgroundColor: product.color }}
                                ></span>
                            </div> */}
                            <div className="flex items-center justify-between">
                                <span className="font-bold"> ریال {product.price.toLocaleString()}</span>
                                <div className=" flex items-center justify-between bg-ec-gray rounded-full w-[40%] lg:w-[20%]">
                                    <button
                                        onClick={() =>
                                            changeCount(
                                                "decrease",
                                                product.id,
                                                product.count
                                            )
                                        }
                                        className="font-bold p-1 text-xl w-fit ms-2"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold text-xl w-fit">
                                        {product.count}
                                    </span>
                                    <button
                                        onClick={() =>
                                            changeCount(
                                                "increase",
                                                product.id,
                                                product.count
                                            )
                                        }
                                        className="font-bold p-1 text-xl w-fit me-2"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderCartBasket;
