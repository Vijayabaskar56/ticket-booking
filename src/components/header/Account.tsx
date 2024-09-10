'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import type { Session } from 'next-auth';

const Account = ({
 session,
}: {
 session: Session | null;
}) => {
 return session?.user ?
  <Avatar>
   <AvatarImage src={`${session?.user?.image}`} alt="@shadcn" />
   <AvatarFallback>CN</AvatarFallback>
  </Avatar> : (
   // <Link href="/signin">
   <Button className='bg-primary-gradient' onClick={() => signIn('google', {
    callbackUrl: 'http://localhost:3000',
    redirect: false
   })} variant="default">Sign In</Button>
   // </Link>b
  );
};

export default Account;
