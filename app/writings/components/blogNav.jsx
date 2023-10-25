'use client';

import { getSeriesStructure } from '@/utils/fetchPosts';
export default function BlogNav() {
  getSeriesStructure();

  return (
    <div className="border-solid border-r w-1/5 border-[#FAF0E6] h-full">
      <h1>This is nav</h1>
    </div>
  );
}
