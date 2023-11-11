import Result from "./Result";
import {AxiosResponse} from "axios";
import Message from "./Message";

export default class Provider {
  constructor(host: string, url: string) {
    this.host = host;
    this.url = url;
  }

  async processResponse<T>(sendRequest: () => Promise<AxiosResponse<any, any>>): Promise<Result<T>> {
    try {
      const response = await sendRequest();
      return response.data;
    }
    catch (error: any) {
      console.error("ResourceProvider →", "failed →", this.url, error);
      if (!!error.response)  {
        return error.response.data;
      }
      else {
        return new Result<T>(false, new Message({title: error.message, details: [error.stack]}), null!)
      }
    }
  }

  getUrl(identifier: string | null = null): string {
    return !!identifier ? `${this.host}/${this.url}/${identifier}` : `${this.host}/${this.url}`;
  }

  host: string
  url: string
}