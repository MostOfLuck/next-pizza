export const mapPizzaSize = {
    20: 'Malá',
    30: 'Střední',
    40: 'Velká',
} as const;

export const mapPizzaType = {
    1: 'Tradiční',
    2: 'Tenké',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) =>( {
 name,
 value,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) =>( {
    name,
    value,
   }));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;