export default function LayoutBox({
  children,
  isFlex = true,
}: {
  children: React.ReactNode;
  isFlex?: boolean;
}) {
  return (
    <div
      className={`bg-white p-5 rounded-[20px] rounded-4 w-full flex gap-4 ${!isFlex && 'flex-col'}`}
    >
      {children}
    </div>
  );
}
