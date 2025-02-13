import { RootState } from "@/redux/store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLoading = (state: RootState) => state.auth.loading;
