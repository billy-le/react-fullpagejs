export function Slide({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`slide ${className}`}>{children}</div>;
}

Slide.defaultProps = {
  className: '',
};
