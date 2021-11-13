const initState = {
    Products : [
        {
            id: 1 ,
            image : '/images/mp1.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "65",
            quantity : 1
            
        },

        {
            id: 2 ,
            image : '/images/mp2.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "30",
            quantity : 1
        },

        {
            id: 3 ,
            image : '/images/mp3.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "30",
            quantity : 1
        },

        {
            id: 4 ,
            image : '/images/mp4.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "30",
            quantity : 1
        },

        {
            id: 5 ,
            image : '/images/mp5.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "30",
            quantity : 1
        },

        {
            id: 6 ,
            image : '/images/mp6.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "65",
            quantity : 1
        },

        {
            id: 7 ,
            image : '/images/mp7.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "30",
            quantity : 1
        },

        {
            id: 8 ,
            image : '/images/mp8.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "45",
            quantity : 1
        },

        {
            id: 9 ,
            image : '/images/mp9.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "50",
            quantity : 1
        },

        {
            id: 10 ,
            image : '/images/mp10.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "45",
            quantity : 1
        },

        {
            id: 11 ,
            image : '/images/mp1.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "50",
            quantity : 1
        },

        {
            id: 12 ,
            image : '/images/mp1.png',
            name : "UNISEX STARSHIP PULLOVER HOODIE",
            price : "50",
            quantity : 1
        }
    ],

    product: {}
}


const MenProductReducer = (state = initState, action) =>{
  switch(action.type){
   case  'MENPRODUCT' : 
   return {...state, product : state.Products.find(product => product.id === parseInt(action.id) )}
    default  : 
    return state;
  }
}

export default MenProductReducer;