// const getAllBookings = async(req,res)=>{
//     try {
//         // let users = await bookingModel.find();
//     }
//     catch(error) {
//         res.status(500).send({
//             message:error.message || "internal server error",
//             error
//         })

//     }

// }

// *********************** booking model ******************

import bookingModel from "../model/bookingModel.js"

const checkAvailability = ()=>{
    try {
        // let users = await bookingModel.find();
    }
    catch(error) {
        throw  error
        }
    }


const getAllBooking = async(req,res)=>{
    try {
        // let users = await bookingModel.find();
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
        })

    }

}


const createBooking = async(req,res)=>{
    try {
    let {roomId,employeeId,startTime,endTime} = req.body
    if(checkAvailability(roomId,startTime,endTime))
    {

    }
    else
    {
        res.status(490).send({
            message:"Room Already Booked For Selected Time"
        })
    }
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
        })

    }

}


export default {
    checkAvailability,
    getAllBooking,
    createBooking   
}