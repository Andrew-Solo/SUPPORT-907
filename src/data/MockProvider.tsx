import DomainProvider from "./DomainProvider";
import {ModelData} from "../domains/Model";
import Result from "./Result";

const mock: Dict<ModelData[]> = {
  "forms": [

  ],
  "products": [

  ]
}

export default class MockProvider<TData extends ModelData> extends DomainProvider<TData> {
  override async get(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    const data = mock[this.resource].find(item => item.id === identifier || item.name === identifier) as TData;
    return new Result<TData>(true, "", data);
  }

  override async list(identifier: string = "", params: {[prop:string]: any} = {}): Promise<Result<TData[]>> {
    const data = mock[this.resource] as TData[];
    return new Result<TData[]>(true, "", data);
  }

  override async create(data: {[prop:string]: any}, identifier: string = ""): Promise<Result<TData>> {
    mock[this.resource].push(data as TData);
    return new Result<TData>(true, "", data as TData);
  }

  override async update(data: {[prop:string]: any}, identifier: string): Promise<Result<TData>> {
    const index = mock[this.resource].findIndex(item => item.id === identifier || item.name === identifier);
    mock[this.resource][index] = data as TData;
    return new Result<TData>(true, "", data as TData);
  }

  override async delete(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    const index = mock[this.resource].findIndex(item => item.id === identifier || item.name === identifier);
    const data = mock[this.resource][index] as TData;
    mock[this.resource].splice(index, 1);
    return new Result<TData>(true, "", data);
  }

  constructor(host: string, resource: string) {
    super(host, resource);
  }
}