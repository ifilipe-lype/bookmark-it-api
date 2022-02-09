import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO, IUserDTO } from '@modules/users/dtos/IUser';
import { UserDataValidator } from '@modules/users/validations';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { AppError } from '@shared/entities/AppError';

@injectable()
export class CreateUserFromProviderService {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO): Promise<IUserDTO | never> {
    const userData = await UserDataValidator.create(data);
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) throw new AppError('email is already in use!');

    return this.usersRepository.save(userData);
  }
}

export default CreateUserFromProviderService;
