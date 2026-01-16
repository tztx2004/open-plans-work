export default function Header({
  textColor = 'black',
}: {
  textColor?: 'black' | 'white';
}) {
  return (
    <header className='pt-4 pb-4 flex justify-center'>
      <h2
        className={`text-[15px] leading-[1.4] ${textColor === 'black' ? 'text-[#1A1A1A]' : 'text-white'} bg-transparent`}
      >
        정찬
      </h2>
    </header>
  );
}
