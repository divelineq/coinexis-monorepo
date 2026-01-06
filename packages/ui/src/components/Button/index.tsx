import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cx } from "classix";
import { LoaderCircle } from "lucide-react";
import { captureOwnerStack } from "react";

export interface BaseButtonProps {
  /**
   * Находится ли кнопка в состоянии загрузки
   *
   * @default false
   */
  loading?: boolean | null;
  /**
   * Вариант кнопки
   *
   * @default 'primary'
   */
  color?: VariantProps<typeof getClasses>["color"];
  /**
   * Иконка, отображаемая в начале кнопки
   */
  startIcon?: React.ReactNode;
  /**
   * Иконка, отображаемая на конце кнопки
   */
  endIcon?: React.ReactNode;
  /**
   * Анимация пульсации `animate-pulse opacity-90`
   * @default false
   */
  pulse?: boolean;
  /**
   * Размеры кнопки
   *
   * @default "medium"
   */
  size?: VariantProps<typeof getClasses>["size"];
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  "aria-label"?: string;
}

const getClasses = cva(
  "cursor-pointer relative flex select-none items-center justify-center whitespace-nowrap rounded-md bg-center px-2 text-base font-normal ring-offset-1 ring-offset-paper transition-all duration-500 hover:bg-ripple-gradient hover:bg-15000 hover:bg-center focus-visible:ring-2 active:bg-full active:duration-0 disabled:pointer-events-none disabled:bg-gray-8/20 disabled:text-gray-8/25",
  {
    variants: {
      color: {
        primary:
          "bg-primary text-primary-contrast ring-primary hover:bg-primary-dark hover:to-primary-dark active:bg-primary-light",
        gray: "bg-gray-1 text-gray-8 ring-gray-1 hover:bg-gray-2 hover:to-gray-2 active:bg-gray-3",
      },
      pulse: {
        true: "animate-pulse opacity-90",
        false: false,
      },
      size: {
        medium: "h-9",
        small: "h-6",
      },
    },
    defaultVariants: {
      color: "primary",
      pulse: false,
      size: "medium",
    },
  }
);

function Button({
  color,
  loading,
  startIcon,
  endIcon,
  children,
  disabled,
  className,
  size = "medium",
  pulse,
  ...props
}: BaseButtonProps) {
  if (
    import.meta.env.DEV &&
    !props["aria-label"] &&
    (children == null || children === "" || typeof children === "boolean")
  ) {
    const ownerStack = captureOwnerStack();
    console.warn("Компоненту Button не передан aria-label и children", {
      children,
      "aria-label": props["aria-label"],
    });
    console.warn(ownerStack);
  }

  return (
    <button
      data-tooltip-content={props["aria-label"]}
      data-tooltip-id="tooltip"
      disabled={Boolean(disabled || loading)}
      type="button"
      {...props}
      className={cx(className, getClasses({ color, size, pulse }))}
    >
      {startIcon && (
        <span className={cx(children ? "pr-1" : null)}>{startIcon}</span>
      )}
      <div className={cx("min-w-0 w-auto truncate", loading && "invisible")}>
        {children}
      </div>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <LoaderCircle size="1.25rem" />
        </span>
      )}
      {endIcon && <div className={cx(children ? "pl-1" : null)}>{endIcon}</div>}
    </button>
  );
}

export { Button };
