export interface Reservation {
  id: number;
  customerId: number;
  bookableId: number;
  numberOfPeople: number;
  checkIn: string;
  checkOut: string;
}
