// interface Cart Item {

// }

const Cart: any = {
    state: {
        cart: []
    },
    addItemToCart(cartId: number, product: string, strain: string, size: string): void {
        const item = {
            cartId,
            product,
            strain,
            size
        };
        this.state.cart.push(item);
    },
    addQuantityToCart(cartId: number, quantity: number) {
        const cartItem = this.state.cart.find((item: any) => item.cartId === cartId);
        cartItem.quantity = quantity;
    }
};

export default Cart;
