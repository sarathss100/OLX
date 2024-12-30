import { useState } from "react";


const Footer = function() {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);
    return (
        <div className='bg-cyan-950 h-20'>
            <h1 className='text-white p-4 text-xs'>All rights reserved @ 2006-{year} OLX</h1>
        </div>
    );
};

export default Footer;