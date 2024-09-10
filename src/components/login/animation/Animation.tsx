import { ReactNode } from "react";
import loginStyle from "../../../theme/styles/login_style_folder/login_style.module.css";

export const Animation = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={loginStyle.box1}>
        <div className={loginStyle.box2}>
          <div className={loginStyle.box4}></div>
          <div className={loginStyle.box5}></div>
        </div>
        <div className={loginStyle.box3}>{children}</div>
      </div>
    </>
  );
};
