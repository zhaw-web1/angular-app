export interface Person {
  id?: string;

  name: string;
  nickname: string;
  avatarUrl: string;
  role: string;
  usesNewImage?: boolean;

  social?: {
    email?: string;
    twitter?: string;
  };

}
