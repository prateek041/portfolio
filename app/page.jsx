import { Sansita } from 'next/font/google';

const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-2xl">
        <p className={`text-xl`}>Hey there, this is</p>
        <h1 className={`${sansita.className} text-8xl text-center max-w-xs`}>
          Prateek Singh
        </h1>
      </div>
    </div>
  );
}
