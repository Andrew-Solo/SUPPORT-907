import Model, {ModelData} from "./Model";
import {makeObservable, override} from "mobx";

export default class Product extends Model<Product, ProductData> {
  // Model overrides

  override get resource(): string {
    return "forms";
  }

  override get title(): string {
    return this.data.title;
  }

  // Product specific

  // Computed

  // Actions

  constructor(data: ProductData) {
    super(data);
    this.data.title = data.title;

    makeObservable(this, {
      resource: override,
      title: override,
    })
  }
}

export interface ProductData extends ModelData {
  title: string
}