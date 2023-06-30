"use client"

import { Auth } from 'aws-amplify';
import { Button, Link } from '@aws-amplify/ui-react';
import { useState } from 'react';

export default function Home() {
  const signOut = async () => {
    try {
      await Auth.signOut();
    }catch(e){
      console.log(e);
    }
  };
  const [name, setName] = useState("");
  const [isSuperAdmin, setRole] = useState("");
  const fetchUserDetail = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
      setRole(groups.includes('SuperAdmin'));
      setName(user.username);
    }catch(e) {
      console.log(e);
    }
  }
  fetchUserDetail();
  return (
    <main className="flex flex-col items-start justify-between px-24">
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
      {isSuperAdmin ? (
          <>
            <Link>Menu 1</Link>
            <Link>Menu 2</Link>
            <Link>Menu 3</Link>
          </>
        ) : (
          <>
            <Link>Menu 3</Link>
            <Link>Menu 4</Link>
            <Link>Menu 5</Link>
          </>
        )}
        <Button
          loadingText=""
          onClick={() => signOut()}
          ariaLabel=""
        >
          Sign out!
        </Button>
      </div>
      <div className='my-5'>
        {name ? (
          <>
            <h1>Welcome {name}!</h1>
          </>
        ) : (
          <></>
        )}
        
      </div>
    </main>
  )
}
