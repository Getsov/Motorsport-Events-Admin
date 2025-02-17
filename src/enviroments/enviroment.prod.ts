export const environment = {
  production: true,
  baseUrl: process.env['API_URL'] || 'https://race-fanatic-server.onrender.com',
  accessToken: '',
  googleMapsApiKey: process.env['GOOGLE_MAPS_WEB_API_KEY'] || '',
  googleMapsAndroidApiKey: process.env['GOOGLE_MAPS_ANDROID_API_KEY'] || '',
};
