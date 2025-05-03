// src/components/Avatar.tsx
'use client';
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-accent p-1">
      <Image
        src="/images/avatar.jpg"
        alt="Thien-Phuc Tran"
        width={192}
        height={192}
        unoptimized
        className="object-cover object-center w-full h-full rounded-full"
      />
    </div>
  );
}

