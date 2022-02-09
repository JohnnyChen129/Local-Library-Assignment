function findAccountById(accounts, id) {
  return accounts.find ((account)=> account.id === id);
}


function sortAccountsByLastName(accounts) {
return accounts.sort((accA,accB) => accA.name.last > accB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
let count = 0;
for (let i=0;i<books.length; i++){
  for (let j=0; j < books[i].borrows.length; j++){
    if (account.id === books[i].borrows[j].id){
      count ++;
    }
  }
}
return count;
}


  function getBooksPossessedByAccount({ id }, books, authors) {
    return books.reduce((acc, book) => {
        book.borrows[0].id === id && !book.borrows[0].returned
            ? acc.push({ ...book, author: authors.find((auth) => auth.id === book.authorId) })
            : null;
        return acc;
    }, []);
  return booksAccount; 
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
