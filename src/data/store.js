import { create } from 'zustand';
import Menu from './lista';

const useVariablesStore = create((set) => ({
	MenuFood: Menu,
	CheckoutMeny: [],
	Checkout: [],
	CheckoutTotal: 0,
	email: "",
	emailFilled: false,
	password: "",
	passwordFilled: false,
	ChangeMenuItem: [],
	AddNewMenuItem: [],
	activeInput: false,

	addToCheckout: (item) => {
		console.log('Adding item to checkout:', item);
		set((state) => ({
			...state,
			Checkout: [...state.Checkout, item],
		}));
		useVariablesStore.getState().calculateCheckoutTotal(); // Call calculateCheckoutTotal after adding item
	},

	removeFromCheckout: (id) => {
		console.log('Removing item from checkout with ID:', id);
		set((state) => ({
			...state,
			Checkout: state.Checkout.filter((item) => item.id !== id),
		}));
		useVariablesStore.getState().calculateCheckoutTotal(); // Call calculateCheckoutTotal after removing item
	},

	calculateCheckoutTotal: () => {
		console.log('Calculating checkout total');
		set((state) => ({
			CheckoutTotal: state.Checkout.reduce((total, item) => total + parseInt(item.price), 0),
		}));
	},

	deleteMenyItem: (id) => {
		set((state) => ({
			MenuFood: state.MenuFood.filter((mat) => mat.id !== id),
		}));
	},

	changeMenuItemUpdate: (id, newData) => {
		set((state) => ({
			MenuFood: state.MenuFood.map((item) => {
				if (item.id === id) {
					return { ...item, ...newData };
				}
				return item;
			}),
		}));
	},
}));

export { useVariablesStore };
