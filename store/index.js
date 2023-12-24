import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  actions: {
    getCounter(){
        return this.items;
    },
    getCount(){
        return this.items.length;
    },
    addToCart(item) {
      const existingItem = this.items.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart(index) {
      this.items.splice(index, 1);
    },
    deleteFromCart(item) {
        const existProduct = this.items.find(i => i._id == item._id);
        if(existProduct){
            existProduct.quantity--;
            if(existProduct.quantity == 0){
                const index = this.items.indexOf(existProduct);
                this.items.splice(index, 1);
            }
        } else {
            console.log("product is not found");
        }
      },

    clearCart() {
        this.items = [];
      },

      reset(item) {
        const existProduct = this.items.find((i) => i._id === item._id);
        if (existProduct) {
          const index = this.items.indexOf(existProduct);
          this.items.splice(index, 1);
        }
      },
      resetAll() {
        this.items = [];
      },

      clearProduct(item){
        const existProduct = this.items.find(i => i._id == item._id);
        if(existProduct){
            const index = this.items.indexOf(existProduct);
            this.items.splice(index, 1)
        }
      },
    totalItems(){
      return this.items;
    },
    
  },
  
  persist: {
    storage: persistedState.localStorage,
  },
});