import { ICreateUserDTO } from '@modules/users/dtos/IUser';
import Chance from 'chance';

export function makeFakeCreateUserData(overrides: Partial<ICreateUserDTO> = {}): ICreateUserDTO {
  const chance = new Chance();

  return {
    name: chance.name(),
    username: chance.name(),
    email: chance.email(),
    email_verified: chance.bool(),
    avatar_url: chance.url(),
    provider: chance.company(),
    provider_user_id: chance.guid({ version: 4 }),
    ...overrides,
  };
}
