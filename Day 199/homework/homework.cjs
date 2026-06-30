
// 1) შექმენი books endpoint-ისთვის GET მეთოდი, რომელიც ყველა წიგნს დააბრუნებს.
// 2) შექმენი books endpoint-ისთვის POST მეთოდი, რომელიც ახალ წიგნს დაამატებს.
// 3) შექმენი books endpoint-ისთვის PUT მეთოდი, რომელიც არსებული წიგნის ინფორმაციას განაახლებს.
// 4) შექმენი books endpoint-ისთვის DELETE მეთოდი, რომელიც წიგნს წაშლის.
// 5) დაწერე რა მოხდება, თუ:
// GET მეთოდით მონაცემის დამატებას ვეცდებით.
// DELETE მეთოდით მონაცემის მიღებას ვეცდებით.
// 6) დააკავშირე მეთოდები მათ დანიშნულებასთან:
// GET
// POST
// PUT
// DELETE

// დანიშნულებები:

// მონაცემის წაშლა
// მონაცემის მიღება
// მონაცემის დამატება
// მონაცემის განახლება

//1)
app.get('/books', (req, res) => {
  
  res.json(books);
});

//2)
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

//3)
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === bookId);
  if (index !== -1) {
    books[index] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

//4)
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
      books.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }   
}
);