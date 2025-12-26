export interface IProduct {
  id: number;
  productName: string;
  code: number;
  categoryId: number;
  tagId: number;
  price: string;
  quantity: number;
  brand: string | null;
  model: string | null;
  thumbnail: string;
  images: string[];
  status: "active" | "inactive" | string;
  createBy: number;
  discontPrice: string | null;
  barcode: string;
  rating: number | null;
  description: string;
  createdAt: string;   // ISO datetime
  updatedAt: string;   // ISO datetime
  categoryName: string;
  tagName: string;
  user: string;
  date: string;        // شمسی
}