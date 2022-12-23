import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";

type AuthGuard = () => void;

const useAuthGuard: AuthGuard = () => {
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) return;

    router.push("/sign-in");
  }, [authenticated]);
};

export default useAuthGuard;
