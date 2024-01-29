import { HttpHeaders } from '@angular/common/http';

export function getOptions(accessToken: string) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  if (accessToken) {
    headers = headers.set('X-Authorization', accessToken);
  }

  const options = { headers: headers };
  return options;
}
