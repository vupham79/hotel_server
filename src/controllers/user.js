import { User, Booking, Hotel } from "../models";
import bcrypt from "bcrypt";
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !(email.length > 0) || !password || !(password.length > 0)) {
      return res.status(500).send();
    }
    const user = await User.findOne({
      email,
    });
    if (!user) {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          return res.status(500).send();
        }
        await User.create({
          email,
          password: hash,
        });
        return res.status(200).send(email);
      });
    } else {
      // Load hash from the db, which was preivously stored
      bcrypt.compare(password, user.password, function (err, result) {
        if (result == true) {
          return res.status(200).send(email);
        } else return res.status(500).send();
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).send(users);
    }
  } catch (error) {
    return res.status(500).send();
  }
}

export async function makeBooking(req, res) {
  const { hotelId, user } = req.body;
  try {
    const userId = await User.findOne({
      email: user,
    });
    const booking = await Booking.create({
      hotel: hotelId,
      user: userId,
    });
    if (booking) {
      const hotel = await Hotel.findOne({
        _id: hotelId,
      });
      const update = await Hotel.updateOne(
        {
          _id: hotelId,
        },
        {
          roomAvailable: hotel.roomAvailable - 1,
        }
      );
      return res.status(200).send(booking);
    }
  } catch (error) {
    return res.status(500).send();
  }
}
