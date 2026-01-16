export default function LayoutBox({
  children,
  isVertical = true,
  className,
}: {
  children: React.ReactNode;
  isVertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-5 rounded-[20px] rounded-4 w-full flex gap-4 flex-col ${!isVertical && 'flex-row'} ${className}`}
    >
      {children}
    </div>
  );
}
