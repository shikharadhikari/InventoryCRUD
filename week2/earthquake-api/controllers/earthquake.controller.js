import express from "express";
import fs from "fs";
import path from "path";
import { json } from "stream/consumers";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../assets/earthquakeData.json"); // my location of this file

// this is for all the earthquake details, this will give the all the data in json
const getAllEarthquake = (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).json({
        message: "data not found",
      });
    }
    res.status(201).json(JSON.parse(data));
  });
};

// this function gives a specific json data based on the id
const getEarthquake = (req, res) => {
  const { id } = req.params;
  fs.readFile(filePath, async (err, data) => {
    if (err) {
      res.status(404).json({
        message: "specific data not found",
      });
    }
    const earthquake = await JSON.parse(data);
    const details = await earthquake.find((e) => e.id == id);
    console.log(details);
    res.status(201).json(details);
  });
};

const postEarthquake = async (req, res) => {
  const { id, country, magnitude, date } = req.body;

  try {
    // it is reading the existing file
    const data = fs.readFileSync(filePath, "utf-8");
    const earthquakes = JSON.parse(data); // it converts into array

    // Appends new earthquake details from req.body
    earthquakes.push({ id, country, magnitude, date });

    fs.writeFileSync(filePath, JSON.stringify(earthquakes, null, 4));

    res.status(201).json({ message: "Added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating file", error: err });
  }
};

// updating the earthquake details

const updateEarthquake = async (req, res) => {
  const { id, country, magnitude, date } = req.body;
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const earthquake = JSON.parse(data);
    const findData = earthquake.findIndex((eq) => eq.id == id);
    if (findData !== -1) {
      earthquake[findData] = { id, country, magnitude, date };
      fs.writeFileSync(filePath, JSON.stringify(earthquake, null, 4));
      res.status(201).json({ message: "updated successfully" });
    } else {
      res.json({ message: "something wrong!! can't update" });
    }
  } catch (error) {
    res.status(404).json({ message: "can't find data" });
  }
};

// function for deleting the earthquake details


const deleteEarthquake = async(req,res) => {
    const {id} = req.params;
  const { country, magnitude, date } = req.body;
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const earthquake = JSON.parse(data);
    const findEarthquakeData = earthquake.findIndex((eq) => eq.id == id);

    if (findEarthquakeData !== -1) {
      earthquake[findEarthquakeData] = { id, country, magnitude, date };
      earthquake.splice(findEarthquakeData, 1);
      fs.writeFileSync(filePath, JSON.stringify(earthquake, null, 4)); // null,4 options for human readability
      res.status(201).json({ message: "successfully deleted" });
    } else {
      res.status(404).json({ message: "something went wrong, cannot be deleted" });
    }
  } catch (error) {
    console.log("cannot be deleted", error)
  }
};

export { getAllEarthquake, getEarthquake, postEarthquake, updateEarthquake, deleteEarthquake };
