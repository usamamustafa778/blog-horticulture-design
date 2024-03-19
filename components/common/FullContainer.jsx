export default function FullContainer({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-full flex items-center justify-center flex-col bg-cover bg-center ${className}`}
    >
      {children}
    </div>
  );
}
