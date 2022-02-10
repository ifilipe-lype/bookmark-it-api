import { IUserDTO } from '@modules/users/dtos/IUser';
import { IOauthUserDTO } from '../dtos/IOauthUser';

export class SignUpWithOauthTokenUseCase {
  async execute(oauthUser: IOauthUserDTO): Promise<IUserDTO> {
    // tries to find an existing users using this email
    // if email is already in use, throws an error
    // otherwise saves new user
  }
}

export default SignUpWithOauthTokenUseCase;
