import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export function Avatar(props: IAvatarProps) {
  const { hasBorder, ...restProps } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...restProps}
    />
  );
}
