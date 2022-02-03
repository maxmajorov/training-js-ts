export type UserType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  location: {
    country: string;
    adress: {
      district: string;
      region: string;
      city: string;
      street: string;
    };
  };
  technolodgies: [
    {
      id: number;
      item: string;
      rank: number;
    },
    {
      id: number;
      item: string;
      rank: number;
    },
    {
      id: number;
      item: string;
      rank: number;
    },
    {
      id: number;
      item: string;
      rank: number;
    }
  ];
};

export const user: UserType = {
  id: 1,
  name: "Maxim",
  age: 32,
  isActive: false,
  location: {
    country: "Belarus",
    adress: {
      district: "Minskiy",
      region: "Minskiy",
      city: "Minsk",
      street: "Ybileynaya",
    },
  },
  technolodgies: [
    {
      id: 1,
      item: "HTML",
      rank: 5,
    },
    {
      id: 2,
      item: "CSS",
      rank: 5,
    },
    {
      id: 3,
      item: "JS/TS",
      rank: 4,
    },
    {
      id: 4,
      item: "React/Redux",
      rank: 3,
    },
  ],
};
