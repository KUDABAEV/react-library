export const totalCalculator = books => books.reduce((acc, book) => {
    return book.price * book.count + acc;
}, 0)