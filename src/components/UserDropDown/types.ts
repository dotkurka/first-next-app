import type { UserGoogleType } from 'src/types/user';

export interface UserDropDownProps {
  user: UserGoogleType;
  logOut: () => void;
}
