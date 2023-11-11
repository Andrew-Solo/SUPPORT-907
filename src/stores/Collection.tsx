import {makeAutoObservable} from "mobx";
import DomainProvider from "../data/DomainProvider";
import Result from "../data/Result";
import Message from "../data/Message";
import Model, {ModelCallbacks, ModelData} from "../domains/Model";
import {client} from "../data";

export default class Collection<TModel extends Model<TModel, TData>, TData extends ModelData> {
  readonly provider: DomainProvider<TData>
  readonly type: new (data: TData, callbacks: Partial<ModelCallbacks<TModel, TData>>) => TModel
  readonly modelCallbacks: Partial<ModelCallbacks<TModel, TData>>

  initialized: boolean
  loaded: boolean
  failed: boolean
  message: Message
  items: TModel[]

  //Lifecycle

  sync(): void {
    console.info("Collection →", "syncing →", this.provider.resource);

    this.initialized = true;
    this.loaded = false;
    this.failed = false;
    this.message = new Message();
    this.items = [];

    this.provider.list()
      .then(this.handleSync);
  }

  add(data: TData): void {
    console.info("Collection →", "adding →", `${this.provider.resource}/${data.name ?? data.id}`);

    const item = new this.type(data, this.modelCallbacks);
    this.provider.create(item.data)
      .then(this.handleAdd);
  }

  handleSync(result: Result<TData[]>): void {
    this.loaded = true;
    this.failed = !result.success;
    this.message = result.message;
    this.items = result.data.map(data => new this.type(data, this.modelCallbacks));

    if (result.success) {
      console.info("Collection →", "sync success →", this.provider.resource, result.message);
      this.onSyncSuccess(result.data, result.message);
    }
    else {
      console.error("Collection →", "sync failed →", this.provider.resource, result.message);
      this.onSyncFailure(result.message);
    }
  }

  handleAdd(result: Result<TData>) {
    this.failed = !result.success;
    this.message = result.message;
    if (result.success) {
      console.info("Collection →", "add success →", `${this.provider.resource}/${result.data.name}`, result.message);
      this.onAddSuccess(result.data, result.message);
    }
    else {
      console.error("Collection →", "add failed →", this.provider.resource, result.message);
      this.onAddFailure(result.message);
    }
  }

  //Events

  onSyncSuccess = (data: TData[], message: Message) => {};
  onSyncFailure = (message: Message) => {};
  onAddSuccess = (data: TData, message: Message) => {};
  onAddFailure = (message: Message) => {};

  //Accessors

  get(identifier: string): TModel {
    return this.items.find(item => item.id === identifier || item.name === identifier)!;
  }

  constructor(resource: string, type: new (data: TData, callbacks: Partial<ModelCallbacks<TModel, TData>>) => TModel, callbacks: Partial<ModelCallbacks<TModel, TData>> = {}) {
    this.provider = new DomainProvider<TData>(client.host, resource);

    this.type = type;
    this.modelCallbacks = callbacks;

    this.initialized = false;
    this.loaded = false;
    this.failed = false;
    this.message = new Message({title: ""});
    this.items = [];

    makeAutoObservable(this, {
      provider: false,
      type: false,
      modelCallbacks: false
    }, { autoBind: true })
  }
}