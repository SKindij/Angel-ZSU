// @/app/auth/signin/page.tsx
import { Metadata } from 'next';
import SignInForm from '@/views/Auth/SignInForm';

export const metadata:Metadata = {
  title: 'Адмін вхід',
  description: 'Сторінка для входу адміністраторів сайту.',
};

export default function SignInPage() {
  return (
    <div>
      {/*  */}
      <SignInForm />
    </div>
  );
}