import Link from 'next/link';

export default function Home() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1525973132219-a04334a76080?q=80&w=3558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className='hero-overlay bg-opacity-60' />
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Embrace the thrill of victory and the agony of defeat as you step into the dynamic world
            of sports with us! Whether you&apos;re a die-hard fan or a casual observer, our platform
            is designed to bring you closer to the heart of the action.
          </p>
          <Link className='btn btn-primary' href='/posts' type='button'>
            Show All Post
          </Link>
        </div>
      </div>
    </div>
  );
}
