const catalog = [
    {
       _id:"1",
       title:"Bar-bells",
       price:100.00, 
       category: "workout equipment",
       image:"bar-bells.jpg",
    },
    {
        _id:"2",
       title:"Dumb-bells",
       price:100.00, 
       category: "workout equipment",
       image:"dumb-bells.jpg",
    },
    {
        _id:"3",
        title:"Kettle-bells",
        price:100.00 , 
        category: "workout equipment",
        image:"kettle-bells.jpg",
    },
    {
        _id:"4",
        title:"Plates",
        price:100.00 , 
        category: "workout equipment",
        image:"plates.jpg",
    },
    {
        _id:"5",
        title:"Shoes",
        price:60.00 , 
        category: "Sports Attire",
        image:"shoes.jpg",
    },
    {
        _id:"6",
        title:"Clothes",
        price:50.00 , 
        category: "Sports Attire",
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