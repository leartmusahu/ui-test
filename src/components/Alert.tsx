import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title?: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "default" | "subtle";
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  description,
  icon,
  variant = "default",
  onClose,
}) => {
  const alertStyles = {
    success: "bg-green-100 text-green-800 border border-green-500",
    error: "bg-red-100 text-red-800 border border-red-500",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-500",
    info: "bg-blue-100 text-blue-800 border border-blue-500",
  };

  return (
    <Card
      className={`p-4 flex items-start space-x-3 ${alertStyles[type]} ${
        variant === "subtle" ? "border-dashed" : ""
      }`}
    >
      {icon && <div>{icon}</div>}
      <div>
        {title && <strong>{title}</strong>}
        <p>{description}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="ml-auto hover:text-gray-800">
          <X size={20} />
        </button>
      )}
    </Card>
  );
};
