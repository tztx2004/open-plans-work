import LayoutBox from './LayoutBox';

export default function InfoBoxSkeleton() {
  return (
    <article className='flex-1 flex flex-col gap-3 items-center w-full animate-pulse'>
      {/* ID & Author Skeleton */}
      <LayoutBox className='sm:flex-row'>
        <div className='flex-1'>
          <div className='h-4 bg-gray-200 rounded w-10 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-20'></div>
        </div>
        <div className='flex-1'>
          <div className='h-4 bg-gray-200 rounded w-16 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-32'></div>
        </div>
      </LayoutBox>

      {/* Width & Height Skeleton */}
      <LayoutBox className='sm:flex-row'>
        <div className='flex-1'>
          <div className='h-4 bg-gray-200 rounded w-12 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-16'></div>
        </div>
        <div className='flex-1'>
          <div className='h-4 bg-gray-200 rounded w-12 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-16'></div>
        </div>
      </LayoutBox>

      {/* URL & Download URL Skeleton */}
      <LayoutBox isVertical={true}>
        <div className='flex-1 w-full'>
          <div className='h-4 bg-gray-200 rounded w-8 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-full'></div>
        </div>
        <div className='flex-1 w-full mt-4'>
          <div className='h-4 bg-gray-200 rounded w-24 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-full'></div>
        </div>
      </LayoutBox>

      {/* Button Skeleton */}
      <div className='h-10 bg-gray-200 rounded w-full sm:max-w-[154px]'></div>
    </article>
  );
}
