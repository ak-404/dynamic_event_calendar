import { cn } from "@/utils/className";

export const Button = ({ children, variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
  };

  return (
    <button className={cn(baseStyles, variants[variant])} {...props}>
      {children}
    </button>
  );
};
