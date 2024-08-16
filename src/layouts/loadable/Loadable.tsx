import React, { Suspense, ComponentType } from "react";
import { Loading } from "./loading";

export const Loadable =
  (Component: ComponentType) => (props: React.ComponentProps<ComponentType>) =>
    (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
