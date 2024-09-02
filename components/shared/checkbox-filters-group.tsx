'use client';

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    seacrhInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems = [],
    limit = 5,
    seacrhInputPlaceholder = "Vyhledávání...",
    className,
    onChange,
    defaultValue = [],
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");


    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems?.slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            
            {
                showAll && (
                    <div className="mb-5">
                    <Input onChange={onChangeSearchInput} placeholder={seacrhInputPlaceholder} className="bg-gray-50 border-none" />
                </div>
            )}
 
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item,index) => {
                    return (
                        <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                      />
                    );
                })}
            </div>
                {items.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                            {showAll ? 'Skrýt' : 'Zobrazit vše'}
                        </button>
                 </div>
              )}
        </div>
    );
};