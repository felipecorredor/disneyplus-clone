import { useCallback } from "react";
import { setUserLoginDetails } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const useSetUser = () => {
  const dispatch = useDispatch();

  const setUser = useCallback(
    (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    },
    [dispatch]
  );

  return [setUser];
};

export default useSetUser;
