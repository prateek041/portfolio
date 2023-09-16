import { Big_Shoulders_Inline_Display as Display } from 'next/font/google';

const display = Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-2xl">
        <p className={`text-[24px]`}>Hey there, this is</p>
        <h1
          className={`${display.className} text-[200px] text-center leading-none`}
        >
          Prateek Singh
        </h1>
      </div>
    </div>
  );
}
