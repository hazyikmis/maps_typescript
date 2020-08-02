import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log(user);
const company = new Company();
console.log(company);

/*
new google.maps.Map(document.getElementById("map"), {
  zoom: 2,
  zoomControl: true,
  center: { lat: 0, lng: 0 },
});
*/

const customMap = new CustomMap("map");
/*
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
*/
customMap.addMarker(user);
customMap.addMarker(company);
