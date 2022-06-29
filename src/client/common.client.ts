import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class CommonClient {
  
  url = "http://localhost:8080/api/";
 
  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: { "Content-type": "application/json" },
  });

  type: any;

  constructor(url: string){
    this.url = this.url + url;
  }

  private handleError(error: any){
    return Promise.reject(error.response)
  }

  protected async _findById<T>(id: number): Promise<AxiosResponse<T>> {
    try {
      return (await this.axiosClient.get(`/${id}`)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _findAll<T>(pageRequest: PageRequest): Promise<PageResponse<T>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _register<T>(model: T): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosClient.post("/", model);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _edit<T>(id: number, model: T): Promise<AxiosResponse<T>> {
    try {
      return (await this.axiosClient.put(`/update/${id}`, model)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  protected async _updateStatus<T>(id: number, model: T): Promise<AxiosResponse<T>> {
    try {
      return (await this.axiosClient.put(`/status/${id}`, model)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }
}
