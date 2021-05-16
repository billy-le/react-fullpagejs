export function Section({
  className,
  children,
}: React.PropsWithChildren<{ className?: string; ['data-anchor']: string }>) {
  return <div className={`section ${className}`}>{children}</div>;
}

Section.defaultProps = {
  className: '',
};
