import { cn } from "@/utils/className";

export const Input = ({ label, type = "text", ...props }) => {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        type={type}
        className={cn(
          "w-full px-3 py-2 border rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
        {...props}
      />
    </div>
  );
};
