
function findAuthorById(authors, id) {
let result
  for (author in authors) {
    if (authors[author].id === id) {
      result = authors[author]
    }
  }
  return result
}

function findBookById(books, id) {
  let result
  for (book in books) {
    if (books[book].id === id) {
      result = books[book]
    }
  }
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let result = 
  books.filter((book) => book.borrows[0].returned === false)
  //.map((book) => book)
  

  let ans = 
  books.filter((book) => book.borrows[0].returned === true)
  //.map((book) => book)

  let finAns = [result, ans]
  return finAns
}

function getBorrowersForBook(book, accounts) {
let allCheckOuts = book.borrows.map((borrowings) => {
  let specUser = accounts.find((thisReader) => thisReader.id === borrowings.id)
  return {...borrowings, ...specUser}})

  return allCheckOuts.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
