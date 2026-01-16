export default function LayoutBoxContent({
  title,
  content,
}: {
  title: string;
  content: string | number;
}) {
  return (
    <div className='flex-1'>
      <h3 className='text-[15px] font-medium text-[#111111] leading-[1.4]'>
        {title}
      </h3>
      <p className='text-[15px] font-medium text-[#111111] leading-[1.4] opacity-50'>
        {content}
      </p>
    </div>
  );
}
