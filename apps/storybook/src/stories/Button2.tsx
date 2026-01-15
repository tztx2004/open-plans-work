'use client';

// import { Button, ButtonProps } from '../../../../packages/ui/src/button';
import { Button, ButtonProps } from '@repo/ui/button';

export default function Button2({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}
