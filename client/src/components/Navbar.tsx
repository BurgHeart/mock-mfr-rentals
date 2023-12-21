import { useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { FaUser } from 'react-icons/fa';
import { CgMenu } from "react-icons/cg";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleNavbar() {
        setIsOpen(!isOpen);
    }

    function handleLinkClose() {
        setIsOpen(false);
    }

    return (
        <nav className="w-full md:flex p-5 md:justify-end justify-center bg-primary md:bg-white shadow-sm relative text-white md:text-black">
            <ul className="text-xl font-light md:w-full flex flex-col md:flex-row md:justify-end gap-12 md:mr-12">
                <div className='flex items-center justify-between'>
                    <li className="self-center md:absolute left-4 place-self-start text-[42px] font-extrabold">
                        <Link to="/"> MFR </Link>
                    </li>
                    <button onClick={handleNavbar} className='md:hidden flex hover:scale-[1.05]'>
                        <CgMenu style={{ fontSize: '26px' }} />
                    </button>
                </div>
                <div className={`flex-col md:flex-row gap-12 absolute top-full left-0 md:p-0 md:w-fit p-5 w-full bg-white shadow-md md:shadow-none text-black ${isOpen ? 'flex h-fit' : 'hidden md:flex'} md:relative md:top-auto md:left-auto transition-all duration-300 ease-in-out`}>
                    <Link to="/search" onClick={handleLinkClose}>
                            Find a Vehicle
                    </Link>
                    <Link to="/" onClick={handleLinkClose}>
                            FAQ
                    </Link>
                    <Link to="/" onClick={handleLinkClose}>
                        About
                    </Link>
                    <li>
                        <SignedOut>
                            <SignInButton mode='modal'>
                                <FaUser className="flex items-center self-center h-full" />
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                </div>
            </ul>
        </nav>
    )
}