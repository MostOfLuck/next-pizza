import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { Check } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => { 
    return (
        <div className={className}>
            <Title text="Filtrovat" size="sm" className="mb-5 font-bold"/>
            {/* FilterCheckbox je komponenta, která zobrazuje checkbox s textem */}
            <div className="flex flex-col gap-4">
            <FilterCheckbox text="Můžete sbírat" value="1"/>
            <FilterCheckbox text="Novinky" value="2"/>

            </div>
            {/* Input je komponenta, která zobrazuje input */}
            <div className="mt-5 border-y border-y-neutral-100 py pb-7">
                <p className="font-bold mb-3">Cena od a do</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0}/>
                    <Input type="number" min={100} max={500} placeholder="500"/>
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
            </div>

            <CheckboxFiltersGroup 
            title="Složení"
            className="mt-5"
            limit={6}
            defaultItems={[
                {
                    text: "Bavlna",
                    value: "1"
                },
                {
                    text: "Polyester",
                    value: "2"
                },
                {
                    text: "Viskóza",
                    value: "3"
                },
                {
                    text: "Elastan",
                    value: "4"
                },
                {
                    text: "Lyocell",
                    value: "5"
                },
                {
                    text: "Polyamid",
                    value: "6"
                }
            ]}

            items={[
                {
                    text: "Bavlna",
                    value: "1"
                },
                {
                    text: "Polyester",
                    value: "2"
                },
                {
                    text: "Viskóza",
                    value: "3"
                },
                {
                    text: "Elastan",
                    value: "4"
                },
                {
                    text: "Lyocell",
                    value: "5"
                },
                {
                    text: "Polyamid",
                    value: "6"
                },

                {
                    text: "Bavlna",
                    value: "1"
                },
                {
                    text: "Polyester",
                    value: "2"
                },
                {
                    text: "Viskóza",
                    value: "3"
                },
                {
                    text: "Elastan",
                    value: "4"
                },
                {
                    text: "Lyocell",
                    value: "5"
                },
                {
                    text: "Polyamid",
                    value: "6"
                }

                
            ]}
            
            />

        </div>
    );
};