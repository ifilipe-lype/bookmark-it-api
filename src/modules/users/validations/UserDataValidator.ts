import { AppError } from '@shared/entities/AppError';
import Id from '@shared/entities/Id';
import { ICreateUserDTO, IUserDTO } from '../dtos/IUser';
import { createUserSchema } from './schemas/userschemas';

export class UserDataValidator {
  static async create(data: ICreateUserDTO): Promise<IUserDTO | never> {
    const dateNow = new Date();

    try {
      const { name, username, email, email_verified, provider, provider_user_id, avatar_url } =
        createUserSchema.validateSync(data, { stripUnknown: true });
      return {
        id: Id.make(),
        name,
        username: username ?? name,
        email,
        email_verified,
        provider,
        provider_user_id,
        avatar_url,
        created_at: dateNow,
        updated_at: dateNow,
      };
    } catch (e: any) {
      throw new AppError(e.message);
    }
  }
}
