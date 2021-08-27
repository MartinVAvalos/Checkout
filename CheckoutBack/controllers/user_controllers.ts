import { Request, Response, NextFunction } from 'express'
import { User } from '../models/user_model'
import { db } from '../utils/db'
const firestore = db.firestore();

export
const getUsers = async (req:Request, res:Response, next:NextFunction) => {
    try {
        console.log("Fetch All:")
        const studentsRef = await firestore.collection('students')
        const snapshot = await studentsRef.get()
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    }
    catch (err) {
        console.log(err)
    }
}

export
const addUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = req.body;
        await firestore.collection('students').doc().set(data);
        res.send(JSON.stringify({"message":"success"}));
    }
    catch(error) {
        console.log(error)
    }
}