import express from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
  changeTicketStatus,
} from "../controllers/ticket.controller.js";

const router = express.Router();


router.post("/", createTicket);


router.get("/", getAllTickets);


router.get("/:ticket_id", getTicketById);


router.put("/:ticket_id", updateTicket);


router.delete("/:ticket_id", deleteTicket);


router.patch("/status/:ticket_id", changeTicketStatus);

export default router;
