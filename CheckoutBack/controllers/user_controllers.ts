import { Request, Response, NextFunction } from 'express'
import { User } from '../interfaces/user'

import { db } from '../utils/db'
const firestore = db.firestore();

export
const getUsers = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const users:Array<User> = new Array

        const studentsRef = await firestore.collection('students')
        const snapshot = await studentsRef.get()
        snapshot.forEach(doc => {
            let user:User = { ...doc.data().User }
            users.push(user)
        });
        users.forEach(element => {
            console.log(element)
        });
    }
    catch (err) {
        console.log(err)
    }
}

export
const addUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let body = req.body
        if('name' in body && 'email' in body && 'address' in body) {
            let user:User = { ...body }
            
            await firestore
                .collection('students').doc()
                .set({ 'User': { ...user } })

            return res.status(200)
                .send(JSON.stringify({'message':'Success'}))
        }
        return res.status(400)
            .send(JSON.stringify({'message':'Failed. User needs: name, email, address'}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet"}))
    }
}

export
const updateUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let id:string = req.params.id
        let body = req.body
        if('name' in body && 'email' in body && 'address' in body) {
            let user:User = { ...body }
            await firestore
                .collection('students').doc(id)
                .update({ 'User': { ...user } })
            return res.status(200)
                .send(JSON.stringify({'message':'Success'}))
        }
        return res.status(400)
            .send(JSON.stringify({'message':'Failed. User needs: name, email, address'}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet or user id probably doesn't exist"}))
    }
}

export
const deleteUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        if('id' in req.params) {
            let id:string = req.params.id
            await firestore
                .collection('students').doc(id).delete()

            return res.status(200)
                .send(JSON.stringify({'message':'Success'}))
        }
        return res.status(400)
            .send(JSON.stringify({'message':"Failed. Need id to delete user"}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet"}))
    }
}