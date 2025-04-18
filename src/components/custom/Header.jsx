import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <Link to={'/'} className='flex items-center'>
                <img src='/logo.svg' className='cursor-pointer' width={40} height={40} />
                <span className='ml-4 text-xl font-bold'>MakemyResume</span>
            </Link>
            {isSignedIn ? 
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> : 
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Header
