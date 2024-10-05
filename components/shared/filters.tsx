'use client'

import React from "react";
import { Title } from "./title";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useQueryFilters, useIngredients, useFilters  } from "@/hooks";

interface Props {
    className?: string;
}


export const Filters: React.FC<Props> = ({ className }) => {

    const {ingredients, loading} = useIngredients();
    const filters  = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrices = (prices: number[] ) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    }

    return (
        <div className={className}>
            <Title text="Filtrovat" size="sm" className="mb-5 font-bold"/>

            {/* FilterCheckbox je komponenta, která zobrazuje checkbox s textem */}
            <CheckboxFiltersGroup
            title="Typ testu"
            name="pizzaTypes"
            className="mb-5"
            onClickCheckbox={filters.setPizzaTypes}
            selected={filters.pizzaTypes}
            items={[
                { text: 'Tenké', value: '1'},
                { text: 'Tradiční', value: '2'},
            ]}
            />



            <CheckboxFiltersGroup 
            title="Rozměry"
            name="sizes"
            className="mt-5"
            onClickCheckbox={filters.setSizes}
            selected={filters.sizes}
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
                    value={String(filters.prices.priceFrom )}
                    onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}/>
                    <Input type="number" min={100} max={500} placeholder="500" 
                    value={String(filters.prices.priceTo)}
                    onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}/>
                </div>

                <RangeSlider 
                min={0} 
                max={500} 
                step={10} 
                value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500,]}
                onValueChange={updatePrices}
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
            onClickCheckbox={filters.setSelectedIngredients}
            selected={filters.selectedIngredients}
            />
        </div>
    );
};