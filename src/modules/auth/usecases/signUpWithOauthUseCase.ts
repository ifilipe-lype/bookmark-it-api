import { ICreateUserDTO } from '@modules/users/dtos/IUser';
import CreateUserUseCase from '@modules/users/services/createUserUseCase';
import { container } from 'tsyringe';
import { IOauthUserDTO } from '../dtos/IOauthUser';

interface IResponse {
  id: string;
  name: string;
  email: string;
}

export class SignUpWithOauthUseCase {
  async execute({ name, nickname, email, email_verified, picture, sub, id }: IOauthUserDTO): Promise<IResponse> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    // Maps user's data from auth0 to a common user.
    const commonUserData: ICreateUserDTO = {
      name,
      username: nickname,
      email,
      email_verified,
      avatar_url: picture ?? null,
      provider_user_id: id || sub,
      provider: 'OAuth',
    };

    const user = await createUserUseCase.execute(commonUserData);

    return Object.freeze({ id: user.id, name: user.name, email: user.email });
  }
}

export default SignUpWithOauthUseCase;
