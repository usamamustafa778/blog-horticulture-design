export default function Container({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-11/12 md:w-10/12 flex items-center justify-center flex-col bg-cover bg-center ${className}`}
    >
      {children}
    </div>
  );
}
