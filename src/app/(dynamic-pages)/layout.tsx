import { DynamicLayoutProviders } from './DynamicLayoutProviders';
import { AppSupabaseClient } from '@/types';
import { createSupabaseServerComponentClient } from '@/supabase-clients/createSupabaseServerComponentClient';

// do not cache this layout
export const dynamic = 'force-dynamic';
export const fetchCache = 'only-no-store';
export const revalidate = 0;

async function fetchSession(supabaseClient: AppSupabaseClient) {
  // This is a server-side call, so it will not trigger a revalidation
  const {
    data: { session },
    error,
  } = await supabaseClient.auth.getSession();

  if (error) {
    throw error;
  }

  return session;
}

export const metadata = {
  icons: {
    icon: '/images/logo-black-main.ico',
  },
  title: 'Affordable and High Performance Ghost Hosting - shedtheshade',
  description: 'Welcome to ShedTheShade - Your One-Stop Solution for Affordable and High-Performance Ghost Blog Hosting Looking for a reliable and cost-effective blog hosting service? Look no further! ShedTheShade is here to meet all your blogging needs. With our affordable hosting plans and exceptional performance, we ensure that your blog gets the attention it deserves. Whether you are a seasoned blogger or just starting out, we have the tools and features to help you succeed. Join thousands of satisfied bloggers who have chosen ShedTheShade as their preferred hosting provider. Get ready to take your blog to new heights!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseClient = createSupabaseServerComponentClient();
  const [session] = await Promise.all([fetchSession(supabaseClient)]);
  return (
    <DynamicLayoutProviders initialSession={session}>
      {children}
    </DynamicLayoutProviders>
  );
}
