/* --- STATE --- */
export interface UserState {
  token: string | null;
  refreshToken: string | null;
  sidebarOpen: boolean;
  loading: boolean;
}
