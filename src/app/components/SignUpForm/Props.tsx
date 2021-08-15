export interface Props {
  username: String;
  setUsername: (e) => void;
  firstName: String;
  setFirstName: (e) => void;
  lastName: String;
  setLastName: (e) => void;
  password: String;
  setPassword: (e) => void;
  confirmPassword: String;
  setConfirmPassword: (e) => void;
  submit: () => void;
}
