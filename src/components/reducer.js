

 export const initialState={
     basket:[{
        id:12345, title:"Organic Turmeric Powder 100g"
        ,price:199, rating:5 ,image:"https://ik.imagekit.io/bfrs/tr:w-550,h-650,pr-true,cm-pad_resize,bg-FFFFFF/image_organicfoods/data/tur.jpg"
     }],
     user:null,
 };
  export const getBasketTotal = (basket)=>
      basket?.reduce((amount,item) => item.price + amount,0)
  
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
        basket:[...state.basket,action.item]
        };
        break;
        case "REMOVE_FROM_BASKET":
         let newBasket=[...state.basket];
         const index=state.basket.findIndex((basketItem)=>basketItem.id=== action.id);

        if(index>=0){
            newBasket.splice(index,1);

        }else{
            console.warn(
                `Cant remove product (id:${action.id}) as its not positive`
            );
        }

        return {...state,basket: newBasket};
        break;
        default:
            return state; 
    }
}

export default reducer;
