import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b w-full', className)}>         
            <Container className='flex items-center justify-between py-8 w-full'>
                {/* Left side */}
                <div className='flex items-center gap-4'></div>
                <div className='flex items-center'>
                    <span className='text-6xl ml-2'>🍕</span>
                </div>

                {/* Text aligned to the left edge of the screen */}
                <div className='text-left flex-grow'>
                    <h1 className='text-2xl uppercase font-black'>Slunečná pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>Chuť ráje</p>
                </div>
            </Container>
        </header>
    );
};
