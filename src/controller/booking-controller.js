const { BookingService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const { ServiceError } = require("../util/errors");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    console.log("controller response ", response);
    return res.status(200).json({
      message: "Successfully completed booking",
      success: true,
      error: {},
      data: response,
    });
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      success: false,
      error: error.explanation,
      data: {},
    });
  }
};

module.exports = {
  create,
};
