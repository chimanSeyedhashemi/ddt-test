import {
    BaseService,
    IAPI_Response,
    IAPI_ResponseList,
  } from "./service.base";
  
  export abstract class CrudService<
    EntityModel,
    EntityModelCreate,
    EntityModelUpdate,
    EntityModelCount
  > extends BaseService {
    abstract baseUrl: string;

    create(data: EntityModelCreate): Promise<IAPI_Response<EntityModel>> {
      return this.axiosTokenInstance.post(`/${this.baseUrl}`, data);
    }
  
    update(id:string,data:EntityModelUpdate) : Promise<IAPI_Response<EntityModel>>{
      return this.axiosTokenInstance.patch(`/${this.baseUrl}/${id}`, data);
    }
    remove(id:string) : Promise<IAPI_Response<EntityModel>> {
      return this.axiosTokenInstance.delete(`/${this.baseUrl}/${id}`);
    }
  
    getById(id: string): Promise<IAPI_Response<EntityModel>> {
      return this.axiosTokenInstance.get(`/${this.baseUrl}/${id}`);
    }
  
    getAll(page?:number,count?:number): Promise<IAPI_ResponseList<EntityModel>> {
      return this.axiosTokenInstance.get(`/${this.baseUrl}?page=${page}&count=${count}`);
    }
    search(value: string,getcancel?: any): Promise<IAPI_ResponseList<EntityModel>> {
      return this.axiosTokenInstance.get(`/${this.baseUrl}/search?name=${value}`,getcancel);
    }
  }
  