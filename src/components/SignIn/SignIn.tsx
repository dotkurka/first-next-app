import { GoogleSignIn } from 'src/components';

export default function SignIn() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold m-0'>Sign in now!</h1>
          <p className='mb-0'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
