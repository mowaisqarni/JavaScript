 const arr=[1,2,3,4,5]

//  const arr2=arr.filter((item)=> {return item < 4})
//  console.log(arr2)
//  const arr3=[]
//  arr.forEach( (item )=>
// {
// if(item<4)
// {
//     arr3.push(item)
// }
// })
// console.log(arr3)

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    pages: 281,
    genre: ["Fiction", "Classic", "Historical"],
    isbn: "978-0-06-112008-4"
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    pages: 328,
    genre: ["Dystopian", "Science Fiction", "Political Fiction"],
    isbn: "978-0-452-28423-4"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    pages: 180,
    genre: ["Fiction", "Classic"],
    isbn: "978-0-7432-7356-5"
  }
];
// const c=books.filter((bk) => bk.pages === 180)
// console.log(c);
 const c=books.filter((bk) => 
    {return bk.pages > 200 && bk.genre.includes("Fiction")}
)
console.log(c);