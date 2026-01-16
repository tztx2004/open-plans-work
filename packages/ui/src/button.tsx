'use client';

import { ReactNode } from 'react';
import './global.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  state?: 'default' | 'hover-pressed';
  size?: 'default' | 'small';
}

export const Button = ({
  children,
  state = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-[12px] w-full ${size === 'default' ? 'max-w-[335px]' : 'max-w-[154px]'} bg-[#111] text-white leading-[1.48] font-semibold text-[16px] p-[12px] hover:opacity-80 cursor-pointer ${state === 'default' ? 'opacity-100' : 'opacity-80'} ${props.className}`}
      {...(({ className, ...rest }) => rest)(props)}
    >
      {children}
    </button>
  );
};
