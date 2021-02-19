function _logListOfBorrows ({id}, books){
  let result = []

  for (let borrows in books) {
    for (i = 0; i < books[borrows].borrows.length; i++)
    if (books[borrows].borrows[i].id === id){
    result.push(books[borrows])
  }
}
  return result
}

function findAccountById(accounts, searchID) {
  let foundUser = accounts.find((account) => account.id === searchID)
  return foundUser
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((userA, userB) => userA.name.last > userB.name.last ? 1 : -1)
}

function numberOfBorrows(account, books) {
  //Accesses helper function which will be used to find result

  let bookList = _logListOfBorrows(account, books)

  /*Result function will compare account ID and books' borrowed ID to return an object array containing 
  the account's borroed books*/

  //const result = bookList(account, books)
  return bookList.length
}

function getBooksPossessedByAccount(account, books, authors) {
  //Accesses helper file which contains the function used for "borrowed"

  //let bookList = require("./helper")

  /*borrowed function will loop through accounts and books and return an 
  array which contains all the books checked out by the account*/

  //let borrowed = bookList(account, books)

 
  //Loop function sorts through the borrowed book array and checks to see if authorID matches author
 
 
  let result = books
 .filter((book) => {
   const recent = book.borrows[0];
   return !recent.returned && recent.id === account.id;
 })
 .map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {...book, author : author};
  });
  
  console.log(result)
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
