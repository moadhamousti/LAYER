import Header from '@/components/dashboard/Header';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { transformationTypes } from '../../../../../../constants';

export default async function AddTransformationsPage({ params: { type } }: SearchParamProps) {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in');

  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={transformation.title} 
        subtitle={transformation.subTitle} 
      />
    </>
  );
}
