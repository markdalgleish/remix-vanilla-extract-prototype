import type { AllHTMLAttributes, ElementType } from "react";
import { createElement } from "react";
import { forwardRef } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { Sprinkles } from "~/styles";
import { sprinkles } from "~/styles";

interface ExtendedBoxProps extends Sprinkles {
  as?: ElementType;
  className?: ClassValue;
}

type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, keyof ExtendedBoxProps> &
  ExtendedBoxProps;

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", className, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = sprinkles(atomProps);
    const customClasses = clsx(className);

    return createElement(as, {
      className: `${atomicClasses}${customClasses ? ` ${customClasses}` : ""}`,
      ...nativeProps,
      ref,
    });
  }
);

Box.displayName = "Box";
