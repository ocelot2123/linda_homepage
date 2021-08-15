export interface Props {
  username: String;
  setUsername: (e) => void;
  password: String;
  setPassword: (e) => void;
  remember: Boolean;
  setRemember: (e) => void;
  submit: () => void;
}
