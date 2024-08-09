import { Request, Response } from "express";
import Report from "../models/report";

export const createReport = async (req: Request, res: Response) => {
    console.log("Create Report Route Hit");
  const { description, coordinates } = req.body;
  const image = req.file?.path;

  try {
    const newReport = await Report.create({ description, coordinates, image });
    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getReports = async (req: Request, res: Response) => {
  console.log("Get Reports Route Hit");
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
