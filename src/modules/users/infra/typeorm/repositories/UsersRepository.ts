import { IUserDTO } from '@modules/users/dtos/IUser';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  }

  async save(userData: IUserDTO): Promise<IUserDTO> {
    return this.ormRepo.save(userData);
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.ormRepo.findOne({ email });
  }
}
