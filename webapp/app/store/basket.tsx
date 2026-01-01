import { create } from "zustand";
import { IProduct } from "../(site)/products/types";
interface IProductWithCount extends IProduct {
    count: number;
}
interface IBascketProduct {
    products: IProductWithCount[];
    setProductBasket: (product: IProduct) => void;
    incrementProductCount: (id: number, count: number) => void;
    updateStore: (id: number, count: number) => void;
    removeProduct: (id: number) => void;
}
const useAddToBasket = create<IBascketProduct>((set) => ({
    products: [],
    setProductBasket: (product) =>
        set((state) => {
            const existingProduct = state.products.find(p => p.id === product.id);
            if (existingProduct) {
                return {
                    products: state.products.map((item) =>
                        item.id === product.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    products: [...state.products, { ...product, count: 1 }],
                };
            }
        }),
    incrementProductCount: (id, count) =>
        set((state) => ({
            products: state.products.map((item) =>
                item.id === id ? { ...item, count: item.count + count } : item
            ),
        })),
    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter(
                (product: IProduct) => product.id !== id
            ),
        })),
    updateStore: (id, count) =>
        set((state) => ({
            products: state.products.map((item) =>
                item.id === id ? { ...item, count: count } : item
            ),
        })),
}));

export default useAddToBasket;
