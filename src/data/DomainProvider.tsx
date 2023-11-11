import Result from "./Result";
import axios, {AxiosRequestConfig} from "axios";
import {ModelData} from "../domains/Model";
import Provider from "./Provider";

export default class DomainProvider<TData extends ModelData> extends Provider {
  resource: string

  get config(): AxiosRequestConfig {
    return {
      headers: {

      }
    }
  }

  async get(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    console.info("DomainProvider →", "get →", `${this.resource}/${identifier}`);
    return await this.processResponse<TData>(
      () => axios.get(this.getUrl(identifier), {params, ...this.config})
    );
  }

  async list(identifier: string = "", params: {[prop:string]: any} = {}): Promise<Result<TData[]>> {
    console.info("DomainProvider →", "list →", `${this.resource}/${identifier}`);
    return await this.processResponse<TData[]>(
      () => axios.get(this.getUrl(identifier), {params, ...this.config})
    );
  }

  async create(data: {[prop:string]: any}, identifier: string = ""): Promise<Result<TData>> {
    console.info("DomainProvider →", "create →", `${this.resource}/${data.name ?? data.id ?? identifier}`);
    return this.processResponse<TData>(
      () => axios.post(this.getUrl(identifier), data, this.config)
    );
  }

  async update(data: {[prop:string]: any}, identifier: string): Promise<Result<TData>> {
    console.info("DomainProvider →", "update →", `${this.resource}/${identifier}`);
    return this.processResponse<TData>(
      () => axios.put(this.getUrl(identifier), data, this.config)
    );
  }

  async delete(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    console.info("DomainProvider →", "delete →", `${this.resource}/${identifier}`);
    return this.processResponse<TData>(
      () => axios.delete(this.getUrl(identifier), {params, ...this.config})
    );
  }

  constructor(host: string, resource: string) {
    super(host, resource);
    this.resource = resource;
  }
}