import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  /** Tailwind classes set color via currentColor */
  className?: string;
};

/** Inline SVG version of the GWT wordmark — uses currentColor so the
 *  water drop, "gwt" and "GROUP" all match the surrounding text color. */
export function GwtLogoMark({ className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 300 100"
      role="img"
      aria-label="GWT Group"
      className={className}
      fill="currentColor"
      {...rest}
    >
      {/* Water drop — solid filled */}
      <path
        d="M52 14 C 70 38, 86 56, 86 70 C 86 86, 72 96, 52 96 C 32 96, 18 86, 18 70 C 18 56, 34 38, 52 14 Z"
        fill="currentColor"
      />
      {/* Highlight on the drop */}
      <path
        d="M34 60 C 34 50, 40 44, 46 42 C 42 50, 40 58, 42 66 C 38 66, 34 64, 34 60 Z"
        fill="white"
        opacity="0.85"
      />
      {/* Wordmark "gwt" */}
      <text
        x="100"
        y="70"
        fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="62"
        letterSpacing="-2"
        fill="currentColor"
      >
        gwt
      </text>
      {/* Subline GROUP */}
      <text
        x="195"
        y="92"
        fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
        fontWeight="500"
        fontSize="16"
        letterSpacing="3"
        fill="currentColor"
      >
        GROUP
      </text>
    </svg>
  );
}