// @/app/auth/signup/page.tsx
import { Metadata } from 'next';
import SignUpForm from '@/views/Auth/SignUpForm';

export const metadata:Metadata = {
  title: 'Реєстрація',
  description: 'Сторінка для реєстрації нових користувачів.',
};

export default function SigUpPage() {
  return (
    <div>
      {/*  */}
      <SignUpForm />
    </div>
  );
}