import Journey from './journey';
import Link from 'next/link';

export default function Intro() {
  return (
    <div className="overflow-hidden">
      <div className="max-h-[70vh] overflow-y-auto">
        <div className="flex flex-col gap-y-4 pb-2 max-w-4xl">
          <div className="text-4xl font-semibold">
            <h1> I am a software Engineer</h1>
          </div>
          <p>
            I love Open Source and building software. My current experience is
            with Web and Cloud Native Technologies, but I like exploring. How ?
            my journey below will give a hint !
          </p>
          <div className="flex flex-col">
            <Link
              href="https://drive.google.com/file/d/13UYacxDFT2HjBhCdA0bFY2VZXUcWs0Lc/view?usp=share_link"
              target="_blank"
            >
              Resume {`-->`}
            </Link>
            <Link href="https://github.com/prateek041" target="_blank">
              GitHub {`-->`}
            </Link>
          </div>
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-semibold">Journey So Far</h1>
            <Journey />
          </div>
        </div>
      </div>
    </div>
  );
}
