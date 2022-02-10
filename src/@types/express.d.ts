declare namespace Express {
  export interface Request {
    user?: {
      id?: string;
      sub?: string;
    };
    oAuthUser: {
      name: string;
      nickname?: string;
      picture?: string;
      email: string;
      email_verified: boolean;
      sub: string;
      aud: string;
    };
  }
}
