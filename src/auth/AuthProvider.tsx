import { selectIsLoggedIn } from "@/redux/selectors/auth-selector";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { ReactNode } from "react";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/auth/sign-in");
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    // Return null to avoid rendering children during redirect
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
