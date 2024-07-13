'use client';
import { RenderProviders } from '@/components/Auth/RenderProviders';
import { Email } from '@/components/Auth/Email';
import { EmailAndPassword } from '@/components/Auth/EmailAndPassword';
import {
  useSignInWithMagicLink,
  useSignInWithProvider,
  useSignUp,
} from '@/utils/react-query-hooks';
import { useEffect, useState } from 'react';
import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { useRouter } from 'next/navigation';

export function SignUp() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const router=useRouter()
  function redirectToDashboard() {
    setIsSuccessful(true);
  }
  // const [isMagicLink,setIsMagicLink]=useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const magicLinkMutation = useSignInWithMagicLink({
    onSuccess: () => {
      setSuccessMessage('A magic link has been sent to your email!');
      // setIsMagicLink(true)
    },
    onMutate: () => {
      setSuccessMessage(null);
    },
  });
  const passwordMutation = useSignUp({
    onSuccess: redirectToDashboard,
  });
  const providerMutation = useSignInWithProvider();
  useEffect(()=>{
    supabaseUserClientComponentClient.auth.getUser().then((user) => {
      if (user) {
        router.push('/auth/callback');
      }
    });
})
  return (
    <div className="container h-full grid items-center text-left max-w-lg mx-auto overflow-auto">
      {isSuccessful ? (
        <p className="text-blue-500 text-sm">
          We sent you an email with a confirmation link. Please confirm your
          email address.
        </p>
      ) : (
        <div className="space-y-8 ">
          {/* <Auth providers={['twitter']} supabaseClient={supabase} /> */}
          <div className="flex flex-col items-start gap-0 w-[320px]">
            <p className="text-xl font-[700]">Welcome to shedtheshade</p>
            <p className="text-base text-left font-[400]">
              How would you like to signup?
            </p>
          </div>
          <RenderProviders
            providers={['google', 'github', 'twitter']}
            isLoading={providerMutation.isLoading}
            onProviderLoginRequested={(provider) => {
              providerMutation.mutate({
                provider,
              });
            }}
          />
          <hr />
          <Email
            onSubmit={(email) => {
              magicLinkMutation.mutate({
                email,
              });
            }}
            successMessage={successMessage}
            isLoading={magicLinkMutation.isLoading}
            view="sign-up"
          />
          <hr />
          <EmailAndPassword
            isLoading={passwordMutation.isLoading}
            onSubmit={(data) => {
              passwordMutation.mutate(data);
            }}
            view="sign-up"
          />
        </div>
      )}
    </div>
  );
}
