import {v4 as uuid} from "uuid";
import {action, computed, makeObservable, observable} from "mobx";
import DomainProvider from "../data/DomainProvider";
import {client, providerType} from "../data";
import Result from "../data/Result";
import Message from "../data/Message";

export default class Model<TModel extends Model<TModel, TData>, TData extends ModelData> {
  data: TData
  provider: DomainProvider<TData>

  //Lifecycle

  save() {
    console.info("Model →", "saving →", `${this.resource}/${this.name}`);

    this.provider
      .update(this.data, this.id)
      .then((result) => this.handleSave(result));
  }

  delete(callback: (result: Result<TData>) => void = () => {}) {
    console.info("Model →", "deleting →", `${this.resource}/${this.name}`);

    this.provider
      .delete(this.id)
      .then((result) => callback(result));
  }

  handleDelete(result: Result<TData>) {
    if (result.success) {
      console.info("Model →", "delete success →", `${this.resource}/${this.name}`, result.message);
      this.onDeleteSuccess(result.data, result.message);
    }
    else {
      console.info("Model →", "delete failed →", `${this.resource}/${this.name}`, result.message);
      this.onDeleteFailure(result.message);
    }
  }

  handleSave(result: Result<TData>) {
    if (result.success) {
      console.info("Model →", "save success →", `${this.resource}/${this.name}`, result.message);
      this.onSaveSuccess(result.data, result.message);
    }
    else {
      console.info("Model →", "save failed →", `${this.resource}/${this.name}`, result.message);
      this.onSaveFailure(result.message);
    }
  }

  onDeleteSuccess = (data: TData, message: Message) => {};
  onDeleteFailure = (message: Message) => {};
  onSaveSuccess = (data: TData, message: Message) => {};
  onSaveFailure = (message: Message) => {};

  //Subscriptions

  handleCreated() {
    console.info("Model →", "created →", `${this.resource}/${this.name}`);
    this.onCreated(this as any);
  }

  handleUpdated(data: TData) {
    this.data = data;
    console.info("Model →", "updated →", `${this.resource}/${this.name}`);
    this.onUpdated(this as any);
  }

  handleDeleted() {
    console.info("Model →", "deleted →", `${this.resource}/${this.name}`);
    this.onDeleted(this as any);
  }

  onCreated = (model: TModel) => {}
  onUpdated = (model: TModel) => {}
  onDeleted = (model: TModel) => {}

  //Calculated

  get id(): string {
    return this.data.id;
  }

  get created(): Date {
    return new Date(this.data.created);
  }

  get updated(): Date {
    return new Date(this.data.updated);
  }

  get resource(): string {
    return "";
  }

  get name(): string {
    return this.data.name;
  }

  get title(): string {
    return this.name;
  }

  get subtitle(): string {
    return "";
  }

  get description(): string {
    return "";
  }

  get image(): string {
    return "";
  }

  get group(): string {
    return "";
  }

  get divider(): string {
    return "";
  }

  get order(): number {
    return 0;
  }

  constructor(data: Partial<TData> = {}, callbacks: Partial<ModelCallbacks<TModel, TData>> = {}) {
    this.data = {...data} as TData;
    this.data.id = data.id ?? uuid();
    this.data.created = data.created ?? new Date().toJSON();
    this.data.updated = data.updated ?? this.data.created;
    this.data.name = data.name ?? this.data.id.replace(/-/g, '');

    this.provider = new providerType<TData>(client.host, this.resource);

    this.onCreated = callbacks.onCreated ?? (() => {});
    this.onUpdated = callbacks.onUpdated ?? (() => {});
    this.onDeleted = callbacks.onDeleted ?? (() => {});

    makeObservable(this, {
      data: observable,
      provider: false,
      save: false,
      delete: false,
      handleSave: false,
      handleDelete: false,
      onSaveSuccess: false,
      onSaveFailure: false,
      onDeleteSuccess: false,
      onDeleteFailure: false,
      handleCreated: false,
      handleUpdated: action,
      handleDeleted: false,
      onCreated: false,
      onUpdated: false,
      onDeleted: false,
      id: false,
      created: false,
      updated: computed,
      resource: computed,
      name: computed,
      title: computed,
      subtitle: computed,
      description: computed,
      image: computed,
      group: computed,
      divider: computed,
      order: computed,
    }, {autoBind: true})
  }
}

export interface ModelData {
  id: string
  created: string
  updated: string
  name: string
}

export interface ModelCallbacks<TModel extends Model<TModel, TData>, TData extends ModelData> {
  onCreated(model: TModel): void
  onUpdated(model: TModel): void
  onDeleted(model: TModel): void
}