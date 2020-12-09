import { BaseService } from "./service.base";

export class GiphyService extends BaseService{
    search(searchKey:string,getcancel?: any){
        return this.axiosInstance.get(`https://api.giphy.com/v1/gifs/search?api_key=GmAvOzdVNdLVCpkDbeHuWe6ZaxmWWZO5&q=${searchKey}&limit=25`,getcancel)
    }
}