import Image from './Image';
import Size from './Size';
import Strain from './Strain';

export default interface Product {
    quantity?: number;
    name: string;
    images: Image[];
    title: string;
    price: number;
    sizes: Size[];
    strains: Strain[];
    description: string;
    [key: string]: any;
    [index: number]: any;
  }
