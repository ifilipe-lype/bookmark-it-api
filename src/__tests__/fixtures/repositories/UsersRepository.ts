import { IUserDTO } from '@modules/users/dtos/IUser';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: IUserDTO[];

  constructor() {
    this.users = [];
  }

  async save(userData: IUserDTO): Promise<IUserDTO> {
    this.users.push(userData);
    return userData;
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
