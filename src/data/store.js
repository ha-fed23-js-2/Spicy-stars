import {create} from 'zustand'
import { saveToApi } from './api';
 //import Menu from './lista'
// import { handleAPI } from './api';



const useVariablesStore = create(set => ({
    MenuFood: [],
    CheckoutMeny: [],
    CheckoutTotal: 0, // Gör så att den tar checkoutMeny.price och adderar för alla object som ligger där. 

    ChangeMenuItem: [], //Gör så den innehåller det aktuella objectet (fyller i form med värderna)
    AddNewMenuItem: [], // lägga in värderna, till menu(listan)
    activeInput: false,

	// setMenyFood: () => set(state => ({
	// 	MenuFood: handleAPI
	// })),
	setMenuFood: (result) => set( ({
		MenuFood: result
	})),
	// ApiMenuFood: (result) => set({ MenuFood: result }),

    deleteMenyItem: (id) => set(state => ({
        MenuFood: state.MenuFood.filter(mat => mat.id !== id)
       
    })),


     changeMenuItemUppdate: (id, newData) => set(state => ({
        MenuFood: state.MenuFood.map(item => {
            if (item.id === id) {
				
                return { ...item, ...newData } ;
            }
            // console.log(state.MenuFood);
			// saveToApi(state.MenuFood)
			
             return item;

         }),
        
		 
           
    }))
    

}))

export {useVariablesStore}