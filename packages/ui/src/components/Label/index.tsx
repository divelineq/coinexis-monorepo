import cx from "classix";
import type * as React from "react";

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cx("text-sm font-medium text-zinc-300", className)}
      {...props}
    />
  );
}

export { Label };
