import { cva, type VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";

import styles from "./link.module.css";

const link = cva(styles.link, {
  variants: {
    size: {
      small: styles["link-small"],
      medium: styles["link-medium"],
      large: styles["link-large"],
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    external?: boolean;
  };

export function Link({ 
  className,
  size,
  external,
  children,
  ...props 
}: LinkProps) {
  return (
    <a
      className={link({ size, className })}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

Link.displayName = "Link"; 