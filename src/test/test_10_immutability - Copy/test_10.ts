export type UserType = {
  name: string;
  cash: number;
  address: {
    city: string;
    street: string;
  };
};

export type LaptopType = {
  title: string;
};

export type BooksType = {
  books: Array<string>;
};

type CompanyType = {
  id: number;
  name: string;
};

export type CompaniesType = {
  companies: Array<CompanyType>;
};

export type UserWithLaptopType = UserType & { laptop: LaptopType };

export type UserWithBooksType = UserType & BooksType;

export type UserWithCompaniesType = UserType & BooksType & CompaniesType;

export const addCash = (user: UserType, adding: number) => {
  const copyUser = { ...user, cash: user.cash + adding };
  //copyUser.cash = user.cash + adding
  return copyUser;
};

export const relocateUser = (user: UserWithLaptopType, relCity: string) => {
  return { ...user, address: { ...user.address, city: relCity } };
};

export const upgradeLaptop = (user: UserWithLaptopType, newLaptop: string) => {
  return { ...user, laptop: { ...user.laptop, title: newLaptop } };
};

export const addBooks = (
  user: UserWithLaptopType & UserWithBooksType,
  newBook: string
) => {
  return { ...user, books: [...user.books, newBook] };
};

export const updateBook = (
  user: UserWithLaptopType & UserWithBooksType,
  findBook: string,
  newBook: string
) => {
  return {
    ...user,
    books: user.books.map((el) => el === findBook) ? newBook : findBook,
  };
};

export const removeBook = (
  user: UserWithLaptopType & UserWithBooksType,
  findBook: string
) => {
  return {
    ...user,
    books: user.books.filter((el) => el !== findBook),
  };
};

export const addCompany = (
  user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType,
  newCompany: CompanyType
) => {
  return {
    ...user,
    companies: [...user.companies, newCompany],
  };
};

export const changeCompany = (
  user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType,
  oldCompanyID: number,
  newCompany: CompanyType
) => {
  return {
    ...user,
    companies: user.companies.map((el) =>
      el.id === oldCompanyID ? newCompany : null
    ),
  };
};

export const removeCompany = (
  user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType,
  removeCompanyID: number,
  findCompany: CompanyType
) => {
  return {
    ...user,
    companies: user.companies.find((el) => el.id !== removeCompanyID),
  };
};
