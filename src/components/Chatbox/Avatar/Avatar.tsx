import React from "react";
import scss from "./Avatar.module.scss";

type AvatarPropsType = {
  img: string;
  img_name: string;
};

function Avatar({ img, img_name }: AvatarPropsType) {
  return (
    <div className={scss.avatar}>
      <img src={img} alt={img_name} />
    </div>
  );
}

export default Avatar;
