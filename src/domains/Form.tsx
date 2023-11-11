import Model, {ModelData} from "./Model";
import {makeObservable, override} from "mobx";

export default class Form extends Model<Form, FormData> {
  // Model overrides

  override get resource(): string {
    return "forms";
  }

  override get title(): string {
    return this.data.title;
  }

  // Form specific

  // Computed

  // Actions

  constructor(data: FormData) {
    super(data);
    this.data.title = data.title;

    makeObservable(this, {
      resource: override,
      title: override,
    })
  }
}

export interface FormData extends ModelData {
  title: string
}