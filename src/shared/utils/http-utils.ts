import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
const { accessToken } = environment;

export function getOptions() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Authorization': accessToken,
  });

  const options = { headers: headers };
  return options;
}
