import { User } from './User';

export interface Event {
  shortTitle: string;
  longTitle?: string;
  shortDescription: string;
  longDescription?: string;
  visitorPrices: { price: number; description: string; _id: string }[];
  participantPrices?: { price: number; description: string; _id: string }[];
  dates: { date: string; startTime: string; endTime: string; _id: string }[];
  imageUrl: string;
  contacts: {
    coordinates: { lat: number; lng: number };
    region: string;
    address: string;
    phone: string;
    email: string;
  };
  categories: string[];
  likes: [];
  creator: User;
  winners?: { name: string; vehicle: string; place: number }[];
  isDeleted: boolean;
  isApproved: boolean;
  _id: string;
}
