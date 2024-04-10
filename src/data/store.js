import {create} from 'zustand'
import Menu from './lista'

const useVariablesStore = create(set => ({
    MenuFood: Menu,
    CheckoutMeny: [],
    CheckoutTotal: 0, // Gör så att den tar checkoutMeny.price och adderar för alla object som ligger där. 

    ChangeMenuItem: [], //Gör så den innehåller det aktuella objectet (fyller i form med värderna)
    AddNewMenuItem: [], // lägga in värderna, till menu(listan)
    activeInput: false,

    
    deleteMenyItem: (id) => set(state => ({
        MenuFood: state.MenuFood.filter(mat => mat.id !== id)
       
    })),


     changeMenuItemUppdate: (id, newData) => set(state => ({
        MenuFood: state.MenuFood.map(item => {
            if (item.id === id) {
                return { ...item, ...newData };
            }
             return item;
         }),
           
    }))

}))

export {useVariablesStore}