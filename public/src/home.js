
function totalBooksCount(books) {
  //console.log(books.length)
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let result = 
  books
  .filter((book) => book.borrows[0].returned === false)
  .map((book) => book)
  return result.length
}

function getMostCommonGenres(books) {

  let arrayGenres = books.reduce((acc, eachBook) => {
    let genreKey = eachBook[`genre`] 
    if (acc[genreKey]) {
     acc[genreKey] += 1
    } else {
     acc[genreKey] = 1
    }
    return acc}, {})
  let eachGenre = Object.keys(arrayGenres)
  let sortedArray = eachGenre.sort((keyA, keyB) => arrayGenres[keyA] > arrayGenres[keyB] ? -1 : 1)
  let solutionArray = []
  for (i=0;i<sortedArray.length;i++){
    solutionArray.push({name:sortedArray[i], count:arrayGenres[sortedArray[i]]})
    
  }
    return solutionArray.slice(0,5)
}

function getMostPopularBooks(books) {
  
let result = []
 
   books.sort((countA, countB) => (countA.borrows.length > countB.borrows.length) ? -1 : 1)
  
   for( let name in books){
     result.push({name: books[name].title, count:books[name].borrows.length})
   }

   return result.slice(0,5)
  }

function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, {authorId, borrows}) => {
    if (acc[authorId]){
      acc[authorId].push(borrows.length)
    }
    else {
      acc[authorId] = [borrows.length]
    }
    return acc
  }, {})

  for (let id in count){
    const sum = count[id].reduce((keyA, keyB) => keyA+keyB)
    count[id] = sum
  }
  
  const keys = Object.keys(count)
  let sorted = keys.sort((keyA,keyB) => count[keyA] > count[keyB] ? -1 : 1)
  
  let result = sorted.map((authorId) => {authors.find(({id}) => {return id === authorId})

  const {name: {first, last}} = authors.find(({id}) => id === Number(authorId))
  const name = `${first} ${last}`
  return {name, count:count[authorId]}})
  return result.slice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
