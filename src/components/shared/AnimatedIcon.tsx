
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  animation?: 'pulse' | 'float' | 'bounce' | 'wave' | 'none';
  className?: string;
}

const AnimatedIcon = ({
  icon: Icon,
  size = 24,
  color,
  animation = 'none',
  className,
}: AnimatedIconProps) => {
  const animationClasses = {
    pulse: 'animate-pulse-gentle',
    float: 'animate-float',
    bounce: 'animate-bounce-gentle',
    wave: 'animate-wave',
    none: '',
  };

  return (
    <div className={cn('inline-flex', animationClasses[animation], className)}>
      <Icon size={size} color={color} />
    </div>
  );
};

export default AnimatedIcon;
