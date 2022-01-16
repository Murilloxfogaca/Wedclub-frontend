export default interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  user = 'user'
}
