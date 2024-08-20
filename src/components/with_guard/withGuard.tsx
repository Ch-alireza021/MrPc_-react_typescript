import React from "react";

export const WithGuard = <P extends object>(Component: React.ComponentType<P>) => {
  const GuardedComponent: React.FC<P> = (props: P) => {
    const isLogin = true

    return isLogin ? (
      <Component {...props} />
    ) : (
    //   <Login shouldNavigate={false} />
    'false'
    );
  };

  return GuardedComponent;
};


