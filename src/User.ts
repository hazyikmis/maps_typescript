import faker from 'faker';
import { Mappable } from './CustomMap';

//export class User {
//"implements Mappable" phrase is optional, not required! But its better to show like that!
//This helps TypeScript to catch errors or show direction!
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
