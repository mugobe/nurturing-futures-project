
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  hoverLift?: boolean;
  glass?: boolean;
}

const Card = ({ className, children, hover = false, hoverLift = false, glass = false }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl p-6 shadow-sm border border-border bg-card text-card-foreground',
        hover && 'hover-scale',
        hoverLift && 'hover-lift',
        glass && 'glass-panel',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn('flex flex-col space-y-1.5 pb-4', className)}>{children}</div>;
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h3 className={cn('text-xl font-semibold leading-tight tracking-tight', className)}>{children}</h3>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
};

export const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn('', className)}>{children}</div>;
};

export const CardFooter = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn('flex items-center pt-4', className)}>{children}</div>;
};

export default Card;
