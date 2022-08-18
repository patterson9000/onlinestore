const catalog = [
    {
       _id:"1",
       title:"bar-bells",
       price:100.00, 
       category: "workout equipment",
       image:"bar-bells.jpg",
    },
    {
        _id:"2",
       title:"dumb-bells",
       price:100.00, 
       category: "workout equipment",
       image:"dumb-bells.jpg",
    },
    {
        _id:"3",
        title:"kettle-bells",
        price:100.00 , 
        category: "workout equipment",
        image:"kettle-bells.jpg",
    },
    {
        _id:"4",
        title:"plates",
        price:100.00 , 
        category: "workout equipment",
        image:"plates.jpg",
    },
    {
        _id:"5",
        title:"shoes",
        price:60.00 , 
        category: "workout equipment",
        image:"shoes.jpg",
    },
    {
        _id:"6",
        title:"clothes",
        price:50.00 , 
        category: "workout equipment",
        image:"clothes.jpg",
    },
];


class DataService{
    getCatalog(){
        //call the servier
        // get the list of products and return it

        return catalog;
    }
}

export default DataService;