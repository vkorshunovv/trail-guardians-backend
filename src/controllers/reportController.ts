import { Request, Response } from "express";
import Report from "../models/report";

export const createReport = async (req: Request, res: Response) => {
  const { description, coordinates } = req.body;
  const imagePath = req.file ? `uploads/${req.file.filename}` : null;

  if (!imagePath) {
    return res.status(400).json({ message: "No image uploaded." });
  }

  try {
    const newReport = await Report.create({ description, coordinates, image: imagePath });
    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getReports = async (req: Request, res: Response) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};