import { IUserDTO } from '@modules/users/dtos/IUser';

export interface IUsersRepository {
  save(userData: IUserDTO): Promise<IUserDTO>;
  findByEmail(email: string): Promise<IUserDTO | undefined>;
}
