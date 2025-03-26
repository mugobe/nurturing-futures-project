
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'warmth' | 'compassion';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  withIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  rounded = false,
  withIcon = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    primary: "bg-hope-600 hover:bg-hope-700 text-white shadow-sm focus:ring-hope-500",
    secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    warmth: "bg-warmth-500 hover:bg-warmth-600 text-white shadow-sm focus:ring-warmth-400",
    compassion: "bg-compassion-500 hover:bg-compassion-600 text-white shadow-sm focus:ring-compassion-400",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-lg px-6 py-3",
  };
  
  const roundedStyles = rounded ? "rounded-full" : "rounded-md";
  const iconStyles = withIcon ? "gap-2" : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        roundedStyles,
        iconStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
