// ProductCart.d.ts
export interface ProductCart {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

export interface CartItem extends ProductCart {
    quantity: number;
}
