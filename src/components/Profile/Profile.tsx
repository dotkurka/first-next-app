import { Avatar } from 'src/components';

import type { ProfileProps } from 'src/components/Profile/types';

export default function Profile({ user }: ProfileProps) {
  return (
    <div className='flex flex-col max-w-[400px] w-full h-full rounded-2xl bg-base-100 px-5'>
      <p className='self-center uppercase text-xl'>Welcom</p>
      <Avatar className='w-full max-w-[250px] self-center mb-10' imageUrl={user?.image} />
      <div className='join join-vertical'>
        <span className='join-item w-full h-6 badge badge-primary uppercase'>name</span>
        <div className='join-item h-10 px-3 bg-base-300 flex items-center justify-center'>
          {user?.name}
        </div>
      </div>
      <div className='join join-vertical my-4'>
        <span className='join-item w-full h-6 fo badge badge-primary uppercase'>email</span>
        <div className='join-item h-10 px-3 bg-base-300 flex items-center justify-center'>
          {user?.email}
        </div>
      </div>
    </div>
  );
}
