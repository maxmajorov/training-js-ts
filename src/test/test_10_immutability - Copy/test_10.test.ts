import {
  addBooks,
  addCash,
  addCompany,
  relocateUser,
  removeBook,
  updateBook,
  upgradeLaptop,
  UserType,
  UserWithBooksType,
  UserWithCompaniesType,
  UserWithLaptopType,
} from "./test_10";

test("Immutability test ==> shouldn't change user cash in user_10 (obj)", () => {
  let user_10: UserType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
  };

  expect(user_10.cash).toBe(1000);
  user_10 = addCash(user_10, 500);
  expect(user_10.cash).toBe(1500);
});

test("Relocate to France)", () => {
  let user_10: UserWithLaptopType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
    laptop: {
      title: "HP",
    },
  };

  expect(user_10.address.city).toBe("Minsk");

  const relocatedUser = relocateUser(user_10, "France");

  expect(user_10).not.toBe(relocatedUser);
  expect(relocatedUser.address.city).toBe("France");
  expect(relocatedUser.laptop.title).toBe("HP");
});

test("Upgrade laptop to mackbook", () => {
  let user_10: UserWithLaptopType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
    laptop: {
      title: "HP",
    },
  };

  expect(user_10.laptop.title).toBe("HP");

  const upgrade = upgradeLaptop(user_10, "mackbook");

  expect(upgrade.laptop.title).toBe("mackbook");
});

test("Add books", () => {
  let user_10: UserWithLaptopType & UserWithBooksType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
    laptop: {
      title: "HP",
    },
    books: ["HTML", "CSS", "JS", "REACT"],
  };

  expect(user_10.laptop.title).toBe("HP");

  const addedBooks = addBooks(user_10, "TS");

  expect(addedBooks.books).not.toBe(user_10.books);
  expect(addedBooks.books[4]).toBe("TS");
  expect(addedBooks.books.length).toBe(5);
});

test("Update books", () => {
  let user_10: UserWithLaptopType & UserWithBooksType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
    laptop: {
      title: "HP",
    },
    books: ["HTML", "CSS", "JS", "REACT"],
  };

  const updatedBook = updateBook(user_10, "CSS", "SASS");

  expect(updatedBook.books).not.toBe(user_10.books);
  expect(updatedBook.books).toBe("SASS");
  expect(updatedBook.books.length).toBe(4);
});

test("Remove book", () => {
  let user_10: UserWithLaptopType & UserWithBooksType = {
    name: "Max",
    cash: 1000,
    address: {
      city: "Minsk",
      street: "Esenina",
    },
    laptop: {
      title: "HP",
    },
    books: ["HTML", "CSS", "JS", "REACT"],
  };

  const removedBook = removeBook(user_10, "CSS");

  expect(removedBook.books).not.toBe(user_10.books);
  expect(removedBook.books.length).toBe(3);
});

test("Add companies where i worked", () => {
  let user_10: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType =
    {
      name: "Max",
      cash: 1000,
      address: {
        city: "Minsk",
        street: "Esenina",
      },
      laptop: {
        title: "HP",
      },
      books: ["HTML", "CSS", "JS", "REACT"],
      companies: [
        { id: 1, name: "EPAM" },
        { id: 2, name: "It-INCUBATOR" },
      ],
    };

  const addedCompany = addCompany(user_10, { id: 3, name: "ItechArt" });

  expect(addedCompany.companies).not.toBe(user_10.companies);
  expect(addedCompany.companies.length).toBe(3);
});
