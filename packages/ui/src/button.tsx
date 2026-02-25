export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg";
  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 active:bg-blue-700",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 active:bg-gray-400",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
