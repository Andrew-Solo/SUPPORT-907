import Model, {ModelData} from "./Model";
import {makeObservable, override} from "mobx";

export default class Product extends Model<Product, ProductData> {
  // Model overrides

  override get resource(): string {
    return "products";
  }

  override get title(): string {
    return this.data.title;
  }

  override get subtitle(): string {
    return "$" + this.data.price.toString();
  }

  override get description(): string {
    return this.data.description ?? "";
  }

  override get image(): string {
    return this.data.image ?? "";
  }

  override get group(): string {
    return this.data.group ?? "Others";
  }

  // Product specific

  // Computed

  // Actions

  constructor(data: ProductData) {
    super(data);
    this.data.title = data.title;
    this.data.price = data.price;
    this.data.image = data.image;
    this.data.description = data.description;
    this.data.group = data.group;

    makeObservable(this, {
      resource: override,
      title: override,
    })
  }
}

export interface ProductData extends ModelData {
  title: string
  price: number
  image: string
  description: string
  group: string
}