type HousesType = {
  buildedAt: number;
  repaired: boolean;
  adress: {
    number: number;
    street: {
      title: string;
    };
  };
};

type GovBuildingsType = {
  type: "HOSPITAL" | "FIRESTATION" | "SCHOOL";
  adress: {
    street: string;
    number: number;
  };
};

export type CityType = {
  title: string;
  houses: Array<HousesType>;
  govBuildings: Array<GovBuildingsType>;
  population: number;
};
