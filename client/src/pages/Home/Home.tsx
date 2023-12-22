import { SignUpButton } from '@clerk/clerk-react';
import Button from '@mui/material/Button';
import { BsPersonPlus } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { Link } from 'react-router-dom';

// clerk component style example
{/* <SignUp
    appearance={{
        variables: {
        colorPrimary: '#880000',
        borderRadius: '0',
        }
    }}
/> */}

export const Home = () => {    
    return (
        <div className='w-full flex flex-col'>
            <header>
                <div className="bg-gray sm:h-[630px] flex justify-center sm:items-center">
                    <div className="w-full bg-white h-fit text-center p-8 flex flex-col gap-6 items-center sm:max-w-[600px]">
                        <h1 className="sm:text-[42px] text-[38px]">
                            Lets Get You on the Road.
                        </h1>
                        <p className="w-[75%] text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 items-center'>
                            <Link to='/search'>
                                <Button style={{backgroundColor: '#880000', color: 'white', borderRadius: '0', paddingInline: '25px', width: '220px', height: '46px'}}>
                                    Search Rentals
                                </Button>
                            </Link>
                            <SignUpButton mode='modal'>
                            <Button style={{border: '2px solid #880000', color: '#880000', borderRadius: '0', paddingInline: '25px', width: '220px', height: '46px'}}>
                                        Create Account
                            </Button>
                            </SignUpButton>
                        </div>
                    </div>
                </div>
            </header>
            <section className='w-full flex flex-col py-[70px] items-center justify-center text-center'>
                <h2 className='text-[42px] px-6'>
                        Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className='w-fit lg:w-1/2 text-[20px] py-4 px-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat 
                    orci. Aliquam faucibus purus in massa. Purus in massa tempor nec. Sapien pellentesque habitant morbi 
                    tristique senectus et. Sed faucibus turpis in eu mi bibendum. 
                </p>
                <div className='flex flex-col lg:flex-row gap-6 p-6 justify-center text-[17px]'>
                    <div className='w-[260px] flex flex-col items-center gap-3'>
                        <BsPersonPlus style={{fontSize: '48px', color: '#880000'}}/>
                        <h3>
                            Create an Account
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut ultrices gravida dictum
                            labore et.
                        </p>
                    </div>
                    <div className='w-[260px] flex flex-col items-center gap-3'>
                        <GoVerified style={{fontSize: '48px', color: '#880000'}}/>
                        <h3>
                            Get Verified
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut ultrices gravida dictum
                            labore et.
                        </p>
                    </div>
                    <div className='w-[260px] flex flex-col items-center gap-3'>
                        <BsTruck style={{fontSize: '48px', color: '#880000'}}/>
                        <h3>
                            Rent and Go!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut ultrices gravida dictum
                            labore et.
                        </p>
                    </div>
                </div>
            </section>
            <section className='w-full bg-[#880000] py-[70px] flex flex-col items-center text-white text-center'>
                <h2 className='text-[42px] px-6'>
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className='max-w-5xl text-[20px] py-4 px-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Purus in massa tempor nec. Sapien pellentesque habitant
                morbi tristique senectus et. Sed faucibus turpis in eu mi bibendum.
                Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquam
                faucibus purus in massa. Purus in massa tempor nec. Sapien pellentesque habitant
                morbi tristique senectus et. Sed faucibus turpis in eu mi bibendum. 
                </p>
            </section>
            <section className='w-full py-[70px] flex flex-col items-center text-center'>
                <h2 className='text-[42px] px-6'>
                    Lorem ipsum dolor sit amet et sollicitudin ac consectetur
                </h2>
            </section>
        </div>
    )
}