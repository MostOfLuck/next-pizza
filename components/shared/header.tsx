import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

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
                <div className='flex items-center gap3'>
                    <Button variant="outline" className='flex items-center gap-1'>
                    <User size={16} />
                    Zadejte
                    </Button>
                    <div>
                        <Button className='group relative ml-4'>
                            <b>300Kč</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                            <b>3</b>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
