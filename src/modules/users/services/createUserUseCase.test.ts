import { container } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/IUser';
import { AppError } from '@shared/entities/AppError';
import { makeFakeCreateUserData } from '@tests/fixtures/entities';

import CreateUserUseCase from './createUserUseCase';

describe('Create User from Provider', () => {
  let createUserUseCase: CreateUserUseCase;
  let createUserData: ICreateUserDTO;

  beforeEach(() => {
    createUserUseCase = container.resolve(CreateUserUseCase);
    createUserData = makeFakeCreateUserData();
  });

  it('Should not create an invalid user', async () => {
    createUserData.email = '';
    await expect(createUserUseCase.execute(createUserData)).rejects.toEqual(new AppError('email is a required field'));
  });

  it('Should save and return a valid user', async () => {
    const user = await createUserUseCase.execute(createUserData);
    expect(user).toBeDefined();
    expect(user).toMatchObject(createUserData);
  });

  it('Should not save a user if email already exists', async () => {
    await createUserUseCase.execute(createUserData);
    await expect(createUserUseCase.execute(createUserData)).rejects.toEqual(new AppError('email is already in use!'));
  });
});
