import { Medico } from "@/model/medico.model";
import { PageRequest } from "@/model/page/page-request";
import { CommonClient } from "./common.client";

export class MedicoClient extends CommonClient{

  constructor(){
    super("medicos");
  }

  public async findById(id: number){
    return this._findById<Medico>(id);
  }

  public async findAll(pageRequest: PageRequest){
    return this._findAll<Medico>(pageRequest);
  }

  public async register(model: Medico){
    return this._register<Medico>(model);
  }

  public async edit(id: number, model: Medico){
    return this._edit<Medico>(id, model);
  }

  public async updateStatus(id: number, model: Medico){
    return this._updateStatus(id, model);
  }
}