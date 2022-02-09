import { container } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepositoryInMemory } from '../repositories/UsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepositoryInMemory);
