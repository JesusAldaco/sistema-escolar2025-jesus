'use client'

import { SidebarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme/theme-toggle'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/nextjs'


export function SiteHeader(){
  return(
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button 
          className='h-8 w-8'
          variant='ghost'
          size='icon'
          onClick={() => console.log('sidebar')}
        >
          <SidebarIcon/>
        </Button>


        <div className='justify-end flex-1 sm:flex'>
          <ThemeToggle />
        </div>

        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}