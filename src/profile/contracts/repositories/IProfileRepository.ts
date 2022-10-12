import { ICreateProfileDTO } from "../dto/ICreateProfileDTO"
import { IReturnProfileDTO } from "../dto/IReturnProfileDTO"
import { IUpdateProfileDTO } from "../dto/IUpdateProfileDTO"


export interface IPerfilRepository {
   list(): Promise<IReturnProfileDTO[]>
   create(profile: ICreateProfileDTO): Promise<IReturnProfileDTO>
   remove(id: number): Promise<boolean>
   update(body: IUpdateProfileDTO): Promise<boolean>
}
