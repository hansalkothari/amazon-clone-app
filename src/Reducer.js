  
 
 export const initialState = {
     basket: [],
     user: null,
 };

 export const getBasketTotal = (basket) =>
 basket?.reduce((amount,item) => item.price + amount , 0);

const reducer = (state , action)=>{
    //console.log(action);
    //console.log(basket) ;
    switch(action.type)
    {  
        case "SET_USER":
            return {
                ...state,
                user : action.user,
            };
        case "ADD_TO_BASKET":
            return { 
                ...state ,
                basket: [...state.basket , action.item]
            };
       
        case "REMOVE_FROM_BASKET":
            //logic for removing the item from basket

            let newBasket = [...state.basket];

            //we cloned the basket
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index>=0){
                //item is in the basket
                newBasket.splice(index , 1);
            }
            else{
                console.warn(
                    'cant remove the { id: ${action.id} } as its not in the list '
                );
            }
            return { 

                ...state,
                basket:newBasket,
            };
       
        default:
            return state;
    }
 }

 export default reducer;
