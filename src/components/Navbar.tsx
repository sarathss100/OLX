import Logo from '../assets/olx.png';
import Lens from '../assets/lens.png';
import Arrow from '../assets/arrow.png';
import Search from '../assets/search.png';
import Login from './Login';
import { useState } from 'react';

type searchProduct = {
    setSearch: any
}

const Navbar = function(props: searchProduct) {

    const [loginPopUp, setLoginPopUp] = useState(false);

    return (
        <>
            <div className='flex p-4 bg-slate-100'>
                <img src={Logo} className='w-11 h-9' alt='olx logo' />
                <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
                    <img src={Lens} className='w-6 h-5 mt-1' alt='lens icon' />
                    <input placeholder='Locaion' className='ml-3 outline-none' />
                    {/* <img src={Arrow} className='w-8 h-7' alt='arrow icon' /> */}
                </div>
                <div className='flex h-12 ml-4 border-2 border-black bg-white'>
                    <input onChange={(event) => props?.setSearch(event.target.value)} type="text" placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96 outline-none' />
                    <img src={Search} alt='arrow icon' />
                </div>
                <div className='flex h-12 p-3 ml-10 cursor-pointer'>
                    <h1 className='font-semibold'>ENGLISH</h1>
                    <img src={Arrow} className='w-8 h-7' alt='arrow icon' />
                </div>
                <div onClick={() => setLoginPopUp(!loginPopUp)} className='flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline'>
                    <h1 className='font-bold text-lg'>Login</h1>
                </div>
                <div className='w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500 '>
                    <h1 className='font-bold text-lg'>+ SELL</h1>
                </div>
            </div>
            {loginPopUp && <Login setLoginPop={setLoginPopUp} />}
        </>
    );
};

export default Navbar;