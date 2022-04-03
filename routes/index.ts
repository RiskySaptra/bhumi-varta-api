import express from "express";
import { crowdPoint, locations } from "../models/location";

const router = express.Router();

// modules HERE :
router.get("/locations", locations);
router.get("/crowd_point", crowdPoint);

module.exports = router;
