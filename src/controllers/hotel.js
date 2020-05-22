import { Hotel } from "../models";

export async function createHotel(req, res) {
  try {
    const { name, description, phoneNumber } = req.body;
    console.log(req.body);
    const hotel = await Hotel.create({
      name,
      description,
      phoneNumber,
    });
    return res.status(200).send(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

export async function updateHotel(req, res) {
  try {
    const { _id } = req.params;
    const {
      name,
      description,
      phoneNumber,
      avatar,
      photos,
      roomAvailable = 0,
    } = req.body;
    const hotel = await Hotel.updateOne(
      {
        _id,
      },
      {
        name,
        description,
        phoneNumber,
        avatar,
        photos,
        roomAvailable,
      }
    );
    return res.status(200).send(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

export async function deleteHotel(req, res) {
  try {
    const { _id } = req.params;
    const hotel = await Hotel.deleteOne({
      _id,
    });
    return res.status(200).send(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

export async function getHotel(req, res) {
  try {
    const { name } = req.params;
    const hotel = await Hotel.findOne({
      name,
    });
    return res.status(200).send(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

export async function getAllHotel(req, res) {
  try {
    const hotels = await Hotel.find();
    return res.status(200).send(hotels);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}
