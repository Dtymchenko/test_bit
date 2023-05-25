export interface IProduct {
  id: string | number;
  title: string;
  price: string | number;
  "short-descr": string;
  "full-descr": string;
  available: number;
  liked: boolean;
  checked: boolean;
  img: string;
}

export interface IReview {
  id: string;
  name: string;
  short: string;
  comment: string;
  date: string;
  email: string;
  phone?: string;
  stars: number;
}
