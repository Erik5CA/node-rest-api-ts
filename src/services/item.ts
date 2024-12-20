import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

export const insertItem = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

export const getAllCars = async () => {
  const responseItems = await ItemModel.find();
  return responseItems;
};

export const getCarById = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

export const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};
