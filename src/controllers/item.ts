import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteCar,
  getAllCars,
  getCarById,
  insertItem,
  updateCar,
} from "../services/item";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await getCarById(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getAllCars();
    res.send(responseItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const responseItem = await updateCar(id, body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
