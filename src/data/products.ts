// src/data/products.ts
export type ProductType = 
  | 'Pão Artesanal'
  | 'Bolo Confeitado'
  | 'Confeitaria Fin'
  | 'Salgado Premium'
  | 'Cesta de Café';

export type ProductSize = 'P' | 'M' | 'G' | 'GG' | 'Único';

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  price: number;
  sizes: ProductSize[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: "pao-campanha",
    name: "Pão de Campanha",
    type: "Pão Artesanal",
    description: "Fermentação natural, crosta crocante",
    price: 12.90,
    sizes: ['P', 'M', 'G'],
    popular: true
  },
  {
    id: "bolo-chocolate",
    name: "Bolo Triplo Chocolate",
    type: "Bolo Confeitado",
    description: "Massa, recheio e cobertura de chocolate belga",
    price: 89.90,
    sizes: ['M', 'G', 'GG']
  },
  {
    id: "croissant",
    name: "Croissant Amanteigado",
    type: "Confeitaria Fin",
    description: "Folhado crocante com manteiga francesa",
    price: 8.50,
    sizes: ['Único']
  },
  {
    id: "empada-frango",
    name: "Empada de Frango",
    type: "Salgado Premium",
    description: "Massa amanteigada com recheio cremoso",
    price: 7.90,
    sizes: ['P', 'M']
  },
  {
    id: "cafe-manha",
    name: "Cesta Café da Manhã",
    type: "Cesta de Café",
    description: "Pães, frios, geleias e suco natural",
    price: 49.90,
    sizes: ['M', 'G']
  },
];

export default products;