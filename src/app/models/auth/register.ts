export interface RegistrationRequest {
  username: string;
  email: string;
  password: string;
  provider: string;
  confirmed: boolean;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
  },
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
}