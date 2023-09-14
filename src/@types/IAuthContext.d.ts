export interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (creds: { email: string, password: string }) => void;
  logout: () => void;
}
