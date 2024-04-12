import {create} from 'zustand'
import { saveToApi } from './api';

const useVariablesStore = create(set => ({
    MenuFood: [],
    CheckoutMeny: [],
    CheckoutTotal: 0, 
	Checkout: [],
  
    // ChangeMenuItem: [],
    // AddNewMenuItem: [], 
    activeInput: false,
    showAddFood: false,
	
	setMenuFood: (result) => set( ({
		MenuFood: result
	})),
	

    deleteMenyItem: (id) => set(state => {
        const tempDeleteList = state.MenuFood.filter(mat => mat.id !== id)
        saveToApi(tempDeleteList);
        return {MenuFood: tempDeleteList}
    }),

    
    changeMenuItemUppdate: (id, newData) => set(state => {
        const updatedMenuFood = state.MenuFood.map(item => {
            if (item.id === id) {
                return { ...item, ...newData };
            }
            return item;
        });
    
        console.log(updatedMenuFood);
        saveToApi(updatedMenuFood);
        return { MenuFood: updatedMenuFood };
    }),

    addFoodToMenu : (foodAdd) => set(state => {
        const tempAddedFoodList = [...state.MenuFood, foodAdd]
        saveToApi(tempAddedFoodList)
        return {MenuFood:tempAddedFoodList}

    }),
    setShowAddFood: () => set(state => ({
        showAddFood: state.showAddFood === false ? true : false
    })),
    
    addToCheckout: (item) => {
		set((state) => {
			const existingItemIndex = state.Checkout.findIndex((checkoutItem) => checkoutItem.id === item.id);
			if (existingItemIndex !== -1) {
				const updatedCheckout = [...state.Checkout];
				updatedCheckout[existingItemIndex].quantity += 1;
				return { ...state, Checkout: updatedCheckout };
			} else {
				return { ...state, Checkout: [...state.Checkout, { ...item, quantity: 1 }] };
			}
		});
		useVariablesStore.getState().calculateCheckoutTotal();

	},

	removeFromCheckout: (id) => {
		console.log('Removing item from checkout with ID:', id);
		set((state) => ({
			...state,
            Checkout: state.Checkout.map((item) => {
                if (item.id === id && item.quantity > 1) {
                   
                    return { ...item, quantity: item.quantity - 1 };
                } else if (item.id === id && item.quantity === 1) {
                   
                    return null;
                }
                return item;
            }).filter((item) => item !== null), 
		}));
		useVariablesStore.getState().calculateCheckoutTotal();
	},

	calculateCheckoutTotal: () => {
		console.log('Calculating checkout total');
		set((state) => ({
			CheckoutTotal: state.Checkout.reduce((total, item) => total + (parseInt(item.price)* item.quantity), 0),
		}));
	},

    
    
}))

export { useVariablesStore };