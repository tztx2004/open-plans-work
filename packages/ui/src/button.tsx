'use client';

import { ReactNode } from 'react';
import './global.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  state?: 'default' | 'hover-pressed';
}

export const Button = ({
  children,
  state = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-[12px] w-full max-w-[335px] min-w-[120px] bg-[#111] text-white p-[12px] hover:opacity-80 cursor-pointer ${state === 'default' ? 'opacity-100' : 'opacity-80'} ${props.className}`}
      {...(({ className, ...rest }) => rest)(props)}
    >
      {children}
    </button>
  );
};
