import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";

type UnauthGuard = () => void;

const useUnauthGuard: UnauthGuard = () => {
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated) return;

    router.push("/");
  }, [authenticated]);
};

export default useUnauthGuard;
