const captionModel = require("../models/caption.model");

module.exports.createCaption = async ({
  fullName,
  email,
  password,
  vehicle,
}) => {
  if (
    !fullName.firstName ||
    !email ||
    !password ||
    !vehicle.color ||
    !vehicle.plate ||
    !vehicle.capacity ||
    !vehicle.vehicleType
  ) {
    console.log(vehicle, 18);
    throw new Error("Field is required");
  }
  const caption = captionModel.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });
  return caption;
};
