import Image from 'next/image';

import userAvatar from '../../../public/profile-avatar-grey.svg';

import type { AvatarProps } from 'src/components/Avatar/types';

export default function Avatar({ imageUrl, className = '' }: AvatarProps) {
  return (
    <div className={`avatar ${className}`}>
      <div className='rounded-full w-full h-full'>
        <Image alt='Avatar' height={0} sizes='100%' src={imageUrl || userAvatar} width={0} />
      </div>
    </div>
  );
}
