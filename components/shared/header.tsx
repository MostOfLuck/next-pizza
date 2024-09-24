import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import { Button } from '../ui/button';
import { ArrowRight, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import PizzaImage from '@/img/Screenshot_2024-09-24_142257-transformed.png';
import Link from 'next/link';
import { SearchInput } from './search-input';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b w-full', className)}>         
            <Container className='flex items-center justify-between py-8 w-full'>
                {/* Left side */}
                <Link href='/'>
                    <div className='flex items-center gap-4'>
                        <Image src={PizzaImage} alt="Sun" className='h-24 w-24 ml-2 mr-2' />
                        <div className='text-left'>
                            <h1 className='text-2xl uppercase font-black'>Slunečná pizza</h1>
                            <p className='text-sm text-gray-400 leading-3'>Chuť ráje</p>
                        </div>
                    </div>
                </Link>

                <div className='mx-10 flex-1'>
                    <SearchInput/>
                </div>
                
                <div className='flex items-center gap-3'>
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