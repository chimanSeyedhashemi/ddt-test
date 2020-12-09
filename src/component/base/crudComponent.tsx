
import { Localization } from "../../config/localization/localization";
import { CrudService } from "../../services/crud.service";
import { BaseComponent, IBaseProps } from "./baseComponent";

export interface ICrudProps extends IBaseProps {

}

export abstract class CrudComponent<p extends ICrudProps, EntityModel, EntityModelCreate, EntityModelUpdate, EntityModelCount, S = {}, SS = any> extends BaseComponent<p, S, SS> {

    protected abstract _entityService: CrudService<EntityModel, EntityModelCreate, EntityModelUpdate, EntityModelCount>;


    async create(data: EntityModelCreate): Promise<any> {
        try {
            let res = await this._entityService.create(data);
            return res.data
        } catch (error) {
                   }


    }

    async all(page: number, count: number): Promise<any> {
        try {
            let res = await this._entityService.getAll(page, count);;
            return res.data
        } catch (error) {
          }

    }

    async remove(id: string): Promise<any> {
        try {
            await this._entityService.remove(id);

        } catch (error) {

        }

    }

    async update(id: string, data: EntityModelUpdate): Promise<any> {
        try {
            let res = await this._entityService.update(id, data);

            return res.data
        } catch (error) {
   
        }

    }






}