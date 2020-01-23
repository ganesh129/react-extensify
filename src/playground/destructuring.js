//object destructuring// 
const book={
    title:'ignited minds',
    author:'abdul kalam',
    publisher:{
        Firstname:'penguin'
    }

    
}
const {name:publisherName='Anonymous'}=book.publisher;
console.log(publisherName);

//Array destructuring//
const item=['cofee (hot)','$2.00','$2.50','$2.75']

const [itemName, ,cost]=item
console.log(`A medium ${itemName} costs ${cost}`); 