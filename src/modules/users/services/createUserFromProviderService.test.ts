import { container } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/IUser';
import { AppError } from '@shared/entities/AppError';
import { makeFakeCreateUserData } from '@tests/fixtures/entities';

import CreateUserFromProviderService from './createUserFromProviderService';

describe('Create User from Provider', () => {
  let createUserFromProviderService: CreateUserFromProviderService;
  let createUserData: ICreateUserDTO;

  beforeEach(() => {
    createUserFromProviderService = container.resolve(CreateUserFromProviderService);
    createUserData = makeFakeCreateUserData();
  });

  it('Should not create an invalid user', async () => {
    createUserData.email = '';
    await expect(createUserFromProviderService.execute(createUserData)).rejects.toEqual(
      new AppError('email is a required field')
    );
  });

  it('Should save and return a valid user', async () => {
    const user = await createUserFromProviderService.execute(createUserData);
    expect(user).toBeDefined();
    expect(user).toMatchObject(createUserData);
  });

  it('Should not save a user if email already exists', async () => {
    await createUserFromProviderService.execute(createUserData);
    await expect(createUserFromProviderService.execute(createUserData)).rejects.toEqual(
      new AppError('email is already in use!')
    );
  });
});
