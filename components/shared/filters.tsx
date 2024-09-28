'use client'

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
    className?: string;
}


interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => { 
    const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients();

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

    const [prices, setPrice] = React.useState<PriceProps>({priceFrom: 0, priceTo: 500});

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
     ...prices,
        [name]: value,
    })
    };

    return (
        <div className={className}>
            <Title text="Filtrovat" size="sm" className="mb-5 font-bold"/>

            {/* FilterCheckbox je komponenta, která zobrazuje checkbox s textem */}
            <CheckboxFiltersGroup 
            title="Rozměry"
            name="sizes"
            className="mt-5"
            onClickCheckbox={toggleSizes}
            selected={sizes}
            items={[
                { text: '20 cm', value: '20'},
                { text: '30 cm', value: '30'},
                { text: '40 cm', value: '40'},
            ]}
            />


            {/* Input je komponenta, která zobrazuje input */}
            <div className="mt-5 border-y border-y-neutral-100 py pb-7">
                <p className="font-bold mb-3">Cena od a do</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} 
                    value={String(prices.priceFrom)}
                    onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}/>
                    <Input type="number" min={100} max={500} placeholder="500" 
                    value={String(prices.priceTo)}
                    onChange={(e) => updatePrice('priceTo', Number(e.target.value))}/>
                </div>

                <RangeSlider 
                min={0} 
                max={500} 
                step={10} 
                value={[prices.priceFrom, prices.priceTo,]}
                onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
                />
            </div>

            <CheckboxFiltersGroup 
            title="Složení"
            name='ingredients'
            className="mt-5"
            limit={6}
            defaultItems={items.slice(0, 6)}
            items={items}
            loading={loading}
            onClickCheckbox={onAddId}
            selected={selectedIds}
            />
        </div>
    );
};