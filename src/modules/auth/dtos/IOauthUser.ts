export interface IOauthUserDTO {
  name: string;
  nickname?: string;
  picture?: string;
  email: string;
  email_verified: boolean;
  sub: string;
  id?: string;
}
