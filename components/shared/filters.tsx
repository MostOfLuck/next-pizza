'use client'

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSearchParam, useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    className?: string;
}


interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
pizzaTypes: string;
sizes: string; 
ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => { 
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
    const router = useRouter();
    const {ingredients, loading, onAddId, selectedIngredients, } = useFilterIngredients(searchParams.get('ingredients')?.split(','));

    

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []));
    

    const [prices, setPrice] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    });

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
     ...prices,
        [name]: value,
    })
    };




    React.useEffect(() => {
        const filters = {
            ...prices,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients),
        };

        const query = qs.stringify(filters, {
            arrayFormat: 'comma',
        });

        router.push(`?${query}`, {
            scroll: false,
        } )

    }, [prices, pizzaTypes, sizes, selectedIngredients, router]);


    return (
        <div className={className}>
            <Title text="Filtrovat" size="sm" className="mb-5 font-bold"/>

            {/* FilterCheckbox je komponenta, která zobrazuje checkbox s textem */}
            <CheckboxFiltersGroup
            title="Typ testu"
            name="pizzaTypes"
            className="mb-5"
            onClickCheckbox={togglePizzaTypes}
            selected={pizzaTypes}
            items={[
                { text: 'Tenké', value: '1'},
                { text: 'Tradiční', value: '2'},
            ]}
            />



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
                    value={String(prices.priceFrom )}
                    onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}/>
                    <Input type="number" min={100} max={500} placeholder="500" 
                    value={String(prices.priceTo)}
                    onChange={(e) => updatePrice('priceTo', Number(e.target.value))}/>
                </div>

                <RangeSlider 
                min={0} 
                max={500} 
                step={10} 
                value={[prices.priceFrom || 0, prices.priceTo || 500,]}
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
            selected={selectedIngredients}
            />
        </div>
    );
};