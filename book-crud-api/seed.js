const mongoose = require("mongoose");
const Book = require("./models/Book");

const seedData = [
  {
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort...",
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    img: "https://bit.ly/2tC1Lcg",
    summary: "A young hobbit, Frodo, who has found the One Ring...",
  },
  {
    name: "Avengers: Endgame",
    img: "https://bit.ly/2Pzczlb",
    summary: "Adrift in space with no food or water, Tony Stark sends a message...",
  },
];

mongoose
  .connect("mongodb://localhost:27017/bookdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    await Book.insertMany(seedData);
    console.log("Seed data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.log("Error:", err));
