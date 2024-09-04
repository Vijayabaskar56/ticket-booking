import { z } from "zod";

import {
 createTRPCRouter,
 publicProcedure,
} from "@/server/api/trpc";




export const bookingRouter = createTRPCRouter({
 getSlotDetails: publicProcedure.input(z.null())
  .query(async ({ ctx }) => {
   const bookingDetails = await ctx.db.booking.findMany({
    select: {
     bookingDate: true,
     timeSlot: true,
    }
   });

   return {
    status: 200,
    message: "Slot details fetched successfully",
    data: bookingDetails,
   }
  })
});
