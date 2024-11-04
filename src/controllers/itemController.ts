import { Request, Response, NextFunction } from "express";
import pool from "../utils/database";
import { Item } from "../models/Item";

// GET /items - Retrieve items
export async function getItems(req: Request, res: Response, next: NextFunction) {
    try {
        const [rows] = await pool.query("SELECT * FROM items");
        res.json({ status: "success", data: rows, message: null });
    } catch (error) {
        next(error);
    }
}

// POST /items - Add a new item
export async function addItem(req: Request, res: Response, next: NextFunction) {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({
                status: "error",
                data: null,
                message: "Item name is required",
            });
            return;
        }

        const [result]: any = await pool.query("INSERT INTO items (name) VALUES (?)", [name]);
        const newItem: Item = { id: result.insertId, name };
        res.status(201).json({ status: "success", data: newItem, message: null });
    } catch (error) {
        next(error);
    }
}
