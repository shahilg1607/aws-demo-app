'use client';
import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports';
import { Authenticator, Flex } from '@aws-amplify/ui-react';
import './globals.css'
import '@aws-amplify/ui-react/styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


Amplify.configure({...awsmobile, ssr: true});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flex
        direction="column"
        marginTop="2rem">
          <Authenticator hideSignUp={true} >
            {children}
          </Authenticator>
        </Flex>
      </body>
    </html>
  )
}
