import { AppError } from '@shared/entities/AppError';
import { makeFakeCreateUserData } from '@tests/fixtures/entities';
import { ICreateUserDTO } from '../dtos/IUser';
import { UserDataValidator } from './UserDataValidator';

describe('User create data Validation', () => {
  let createUserData: ICreateUserDTO;

  beforeEach(() => {
    createUserData = makeFakeCreateUserData();
  });

  it('should have a name', async () => {
    createUserData.name = '';
    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(new AppError('name is a required field'));
  });

  it('should have a name at least 3 chars long', async () => {
    createUserData.name = 'Ly';
    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(
      new AppError('name must be longer than 3 characters!')
    );
  });

  it('should have a name at most 255 chars long', async () => {
    createUserData.name = 'L'.repeat(256);
    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(
      new AppError("name can't be longer than 255 characters!")
    );
  });

  it('should have a username at least 3 chars long', async () => {
    createUserData.username = 'Ly';
    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(
      new AppError('username must be longer than 3 characters!')
    );
  });

  it('should have a username at most 255 chars long', async () => {
    createUserData.username = 'L'.repeat(256);
    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(
      new AppError("username can't be longer than 255 characters!")
    );
  });

  it('should have an email', async () => {
    createUserData.email = '';

    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(new AppError('email is a required field'));
  });

  it('should have an email', async () => {
    createUserData.email = 'invalidmail.com';

    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(new AppError('Invalid email!'));
  });

  it('should accept only boolean values for email_verified field', async () => {
    //@ts-ignore
    createUserData.email_verified = 'notrue';
    expect(UserDataValidator.create(createUserData)).rejects.toBeInstanceOf(AppError);
  });

  it("should have a valid avatar's url", async () => {
    createUserData.avatar_url = 'invalidmail.com';

    await expect(UserDataValidator.create(createUserData)).rejects.toEqual(new AppError("Invalid avatar's url"));
  });

  it('should return a valid user data', async () => {
    const validUserData = await UserDataValidator.create(createUserData);

    expect(validUserData.id).toBeDefined();
    expect(validUserData.created_at).toBeDefined();
    expect(validUserData.updated_at).toBeDefined();
    expect(validUserData).toMatchObject(createUserData);
  });
});
