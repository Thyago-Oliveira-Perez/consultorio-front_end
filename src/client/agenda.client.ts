import { Agenda } from "@/model/agenda.model";
import { PageRequest } from "@/model/page/page-request";
import { CommonClient } from "./common.client";

export class AgendaClient extends CommonClient{

  constructor(){
    super("agendas");
  }

  public async findById(id: number){
    return this._findById<Agenda>(id);
  }

  public async findAll(pageRequest: PageRequest){
    return this._findAll<Agenda>(pageRequest);
  }

  public async register(model: Agenda){
    return this._register<Agenda>(model);
  }

  public async edit(id: number, model: Agenda){
    return this._edit<Agenda>(id, model);
  }

  public async updateStatus(id: number, model: Agenda){
    return this._updateStatus(id, model);
  }
}