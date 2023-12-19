import { useState } from 'react';
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className="w-full p-5 flex justify-end bg-white-500 shadow-sm">
            <ul className="text-black text-xl font-light w-full flex justify-end gap-12 mr-12 relative">
                <li className="absolute self-center left-4 text-4xl font-extrabold">
                    <Link to="/"> MFR </Link>
                </li>
                <Link to="/search">
                    Find a Vehicle
                </Link>
                <li>
                    FAQ
                </li>
                <li>
                    About
                </li>
                <li>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <FaUser onClick={() => setOpen(true)} className="flex items-center self-center h-full" />
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </li>
            </ul>
        </div>
    )
}