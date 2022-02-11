import { ICreateUserDTO } from '@modules/users/dtos/IUser';
import * as yup from 'yup';

export const createUserSchema: yup.SchemaOf<ICreateUserDTO> = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, 'name must be longer than 3 characters!')
    .max(255, "name can't be longer than 255 characters!"),
  username: yup
    .string()
    .notRequired()
    .min(3, 'username must be longer than 3 characters!')
    .max(255, "username can't be longer than 255 characters!"),
  email: yup.string().required().email('Invalid email!'),
  email_verified: yup.boolean().default(false),
  avatar_url: yup.string().url("Invalid avatar's url"),
  //password: yup.string().min(8, 'Password must be at least 8 chars long!'),
  provider: yup.string(),
  provider_user_id: yup.string(),
});
