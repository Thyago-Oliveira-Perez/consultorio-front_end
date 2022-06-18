import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

export class CommonClient {
  
  url: string = "http://localhost:8080/api/";
 
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

  public async findById(id: number): Promise<any> {
    try {
      return (await this.axiosClient.get<any>(`/${id}`)).data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async findAll(pageRequest: PageRequest): Promise<PageResponse<any>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<any>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async register(model: any): Promise<void> {
    try {
      return await this.axiosClient.post("/", model);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async edit(model: any): Promise<void> {
    try {
      return (await this.axiosClient.put(`/update/${model.id}`, model)).data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async updateStatus(model: any): Promise<void> {
    try {
      return (await this.axiosClient.put(`/status/${model.id}`, model)).data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
