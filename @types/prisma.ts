import { Ingredient, Product, ProductItem } from '@prisma/client';
import { ingredients } from './../prisma/constants';

export type ProductWithRelations = Product & { items: ProductItem[]; ingredients: Ingredient[] };