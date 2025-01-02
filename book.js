let books=[
    {id:1,title:"1984",author:"George Orwell"},
    {id:2,title:"Thre Great Gatsby",author:"F. Scott"},
    {id:3,title:"Pride and Prejudice",author:"Jane Austin"},
    {id:4,title:"To keep safe environment",author:"Harper Lee"}
];

let reviews=[
    {id:1,bookId:1,content:"Great Writing!"}
];

function getBooks(){
    return books;
}

function getBookById(id){
return books.find(book=>book.id===id);
}

function getReviews(){
    return reviews;
}

function getReviewById(id){
return reviews.find(review=>review.id===id);
}

module.exports={getBooks,getBookById,getReviews,getReviewById};