interface ScrollIndicatorProps {
  className?: string;
  strokeClassName?: string;
  direction?: "down" | "up";
  label?: string;
  animateName?: string;
}

export function ScrollIndicator({
  className = "",
  strokeClassName = "text-white",
  direction = "down",
  label,
  animateName
}: ScrollIndicatorProps) {
  return (
    <div
      data-animate={animateName}
      className={`absolute inset-x-0 top-0 z-[99] flex h-screen flex-col items-center justify-center text-[.8rem] tracking-[.3rem] ${className}`}
    >
      {label ? <span className="mt-[60%] block">{label}</span> : null}
      <svg
        className={`size-[18px] animate-scroll fill-none stroke-current stroke-1 ${label ? "mt-2.5" : ""} ${direction === "up" ? "rotate-180" : ""} ${strokeClassName}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="22.5" />
        <line x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
        <line x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
      </svg>
    </div>
  );
}
