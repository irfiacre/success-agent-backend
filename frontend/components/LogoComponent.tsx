import React from 'react';
import { Icon } from "@iconify/react";

const LogoComponent = () => {
    return (
        <div className='text-white'>
            <div className='flex items-center justify-center gap-2'>
            <Icon icon="mdi:legal" fontSize={32}/>
            <span className='text-2xl'>alaa</span>
            </div>
        </div>
    );
}

export default LogoComponent;
