export default function Button({ className, children, ...rest }) {
  return (
    <button className={`rounded-full py-2 px-4 ${className}`} {...rest}>
      {children}
    </button>
  );
}