// ProductCart.d.ts
export interface ProductCart {
    id: number;
    title: string;
    image: string;
    price: number;
    // Typo fix: it's 'quantity', not 'quanity'
    quantity: number;
}

export interface CartItem extends ProductCart {
    quantity: number;
}
