// import { User } from "./User";
// import { Company } from "./Company";

//instructions to other classes on how they can be an argument to addMarker
//interface Mappable {
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      zoomControl: true,
      center: { lat: 0, lng: 0 },
    });
  }

  /* BAD APPROACH
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      // position: {
      //   lat: user.location.lat,
      //   lng: user.location.lng,
      // },
      position: user.location,
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: company.location,
    });
  }
*/

  // NOT TOO BAD APPROACH, what about if we have more classes having "location": Park.ts, CarLot.ts, etc...
  // In this case, we need to import all these classes up above and also refer to here
  /*
  addMarker(mappable: User | Company): void {
    //mappable.___ //only common property is location
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
  */

  addMarker(mappable: Mappable): void {
    //mappable.___ //only common property is location
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
