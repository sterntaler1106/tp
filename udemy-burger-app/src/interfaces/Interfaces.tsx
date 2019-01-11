import * as React from "react";

export interface Ingredients {
    [key: string]: number;

    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

export interface PropsWithChildren {
    children: any;
}

export interface WithIngredients {
    ingredients: Ingredients;
}