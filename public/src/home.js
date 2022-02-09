function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i<books.length;i++){
  const booksArray = books[i];
  for (let j=0; j<booksArray.borrows.length; j++){
    if (booksArray.borrows[j].returned === false){
      total ++;
    }
  } 
  }
  return total;
}

function _reducedByProp(arr, key){
  let newArr = arr.reduce((acc, prop) => {
    let keyExists = acc.find((item) => item.name === prop[key]);
    if (keyExists) {
      keyExists.count += 1;
    } else {
      let obj = {name: prop[key], count: 1};
      acc.push(obj);
    }
    return acc;
  }, []);
  return newArr;
}

function getMostCommonGenres(books) {
  let countArr = _reducedByProp(books, "genre");
  return countArr.sort((keyA, keyB) => keyB.count - keyA.count).slice(0, 5);
}


function getMostPopularBooks(books) {
  let popBookArray = [];
  books.forEach((book) => {
    popBookArray.push({
      'name': book.title,
      'count': book.borrows.length,
    });
  });
  return popBookArray.sort((bookA,bookB) => bookB.count - bookA.count).slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach(book => {
    authors.forEach(author => {
      if(book.authorId === author.id){
        popularAuthors.push({
          'name':`${author.name.first} ${author.name.last}`,
          'count': book.borrows.length
        });
      }
    });
  });
  popularAuthors.sort((a,b) => b.count - a.count);
  let popularAuthorsReturn = popularAuthors.slice(0,5);
  return popularAuthorsReturn;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
