export interface Category {

  _id: string;

  title: string;

  slug: string;
}

export interface Topic {

  _id: string;

  title: string;
}

export interface Product {

  _id: string;

  title: string;

  slug: string;

  thumbnail: string;

  description: string;

  price: number;

  productType:
    | "course"
    | "download"
    | "resource";

  fileUrl?: string;

  previewUrl?: string;

  category: Category;

  topics: Topic[];

  isPublished: boolean;

  isFeatured: boolean;
}

