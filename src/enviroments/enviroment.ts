declare const process: {
  env: {
    GOOGLE_MAPS_API_KEY: string;
    GOOGLE_MAPS_ANDROID_API_KEY: string;
    API_BASE_URL: string;
  };
};

export const environment = {
  production: false,
  baseUrl: 'https://race-fanatic-server.onrender.com',
  accessToken: '',
  googleMapsApiKey: '${GOOGLE_MAPS_API_KEY}',
  googleMapsAndroidApiKey: '${GOOGLE_MAPS_ANDROID_API_KEY}',
};
