import styles from "./Avatar.module.css";

interface IAvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}
export function Avatar(props: IAvatarProps) {
  const { hasBorder = true, src, alt } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
