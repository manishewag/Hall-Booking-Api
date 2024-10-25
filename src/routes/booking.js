import {Router} from 'express'
import bookingService from '../service/booking.js';

const routes = Router()

// routes.get('/',)
   
routes.get('/',bookingService.getAllBooking);
routes.post('/',bookingService.createBooking);

export default routes