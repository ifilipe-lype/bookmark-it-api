export interface IUserDTO {
  id: string;
  name: string;
  username: string;
  email: string;
  email_verified: boolean;
  //password: string | null;
  avatar_url: string | null;
  provider: string | null;
  provider_user_id: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUserDTO {
  name: string;
  username?: string;
  email: string;
  email_verified: boolean;
  avatar_url: string | null;
  //password: string;
  provider: string | null;
  provider_user_id: string | null;
}
