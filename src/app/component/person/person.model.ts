export interface Person {
  id?: string;

  name: string;
  nickname: string;
  avatarUrl: string;
  role: string;

  social?: {
    email?: string;
    twitter?: string;
  };

}
