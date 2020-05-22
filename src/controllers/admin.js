import { Admin, Booking } from "../models";

export async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find().populate("user hotel");
    if (bookings) {
      return res.status(200).send(bookings);
    }
  } catch (error) {
    return res.status(500).send();
  }
}
