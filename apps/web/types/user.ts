export interface User {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  twoFactorEnabled: boolean;
  identityProvider: IdentityProvider;
  createdAt: Date;
  timeZone: string | null;
  updatedAt: Date;
  location: string | null;
  username: string | null;
  password: string | null;
  plan: UserPlan;
}

export enum IdentityProvider {
  SAML,
  GOOGLE,
  GITHUB,
}

export enum UserPlan {
  FREE,
  PRO,
}
