// import React from "react";

// export const WithGuard = <P extends object>(Component: React.ComponentType<P>) => {
//   const GuardedComponent: React.FC<P> = (props: P) => {
//     const isLogin = true

//     return isLogin ? (
//       <Component {...props} />
//     ) : (
//     //   <Login shouldNavigate={false} />
//     'false'
//     );
//   };

//   return GuardedComponent;
// };

import { FC, JSX, useEffect, useState } from "react";
import { getLoginRole } from "../../services/cookies";
import { usePathname } from "../../hooks";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/login/Login";

const WithGuard = (Component: FC) => {
  const GuardedComponent = (props: JSX.IntrinsicAttributes) => {
    const pathName = usePathname();
    const navigate = useNavigate();
    console.log("Current route:", pathName);
    const [login, setIsLogin] = useState<boolean | string>(false);
    useEffect(() => {
      const isLogin = getLoginRole();
      console.log({ isLogin });
      setIsLogin(isLogin === "ADMIN" ? isLogin : false);
      if (isLogin !== "ADMIN") {
        navigate("/login");
      }
      if(pathName==='/admin')  navigate("/admin/dashboard");
    }, []);

    // useEffect(() => {
    //   if (!login) {
    //     navigate("/login");
    //   }
    // }, [login]);
    console.log(login);
    return login ? <Component {...props} /> : <></>;
  };

  return GuardedComponent;
};

export default WithGuard;
