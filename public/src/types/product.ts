export default interface Product {
    quantity?: number;
    name: string;
    title: string;
    price: number;
    smallImage: string;
    largeImage: string;
    description: string;
    galleryImages: string[];
    [key: string]: string | number | string[] | undefined;
    [index: number]: any;
  }
