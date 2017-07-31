import { Weather } from "./weather";

export class City {
    CityId: number;
    Name: string;
    AlternativeName: string;
    AddToMainList: boolean;
    Weathers: Weather[];
}
