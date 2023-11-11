import Collection from "./Collection";
import Form, {FormData} from "../domains/Form";
import Product, {ProductData} from "../domains/Product";

export class Store {
  constructor() {
    console.info("Store →", "App started");

    this.forms = new Collection<Form, FormData>("forms", Form);
    this.products = new Collection<Product, ProductData>("products", Product);

    this.forms.onSyncSuccess = this.products.sync;
  }

  sync() {
    this.forms.sync();
  }

  forms: Collection<Form, FormData>
  products: Collection<Product, ProductData>
}

export const store = new Store();
store.sync();

