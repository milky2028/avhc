import Image from './Image';
import Size from './Size';
import Strain from './Strain';

export default class Product {
    public quantity?: number;
    public name: string;
    public images: Image[];
    public title: string;
    public price: number;
    public sizes: Size[];
    public strains: Strain[];
    public description: string;
    [key: string]: any;
    [index: number]: any;

    constructor(options?: Product) {
      this.quantity = (options && options.quantity) ? options.quantity : 0;
      this.name = (options && options.name) ? options.name : '';
      this.images = (options && options.images) ? options.images : [];
      this.title = (options && options.title) ? options.title : '';
      this.price = (options && options.price) ? options.price : 0;
      this.sizes = (options && options.sizes) ? options.sizes : [];
      this.strains = (options && options.strains) ? options.strains : [];
      this.description = (options && options.description) ? options.description : 'Loading...';
    }
  }

