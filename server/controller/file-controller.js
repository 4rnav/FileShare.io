import { response } from "express";
import File from "../models/file.js"


export const uploadFile = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    try {
        //create a new file object and return the url of the uploaded file
        const file = await File.create(fileObj);
        response.status(200).json({path: `http://localhost:8000/file/${file._id}`})
    } catch (error) {
        console.error('Error uploading file', error.message)
        response.status(500).json({error : error.message})
    }
}

export const downloadFile = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId)

        //increase downloaded count
        file.downloadContent++;
        //update file in db
        await file.save();
        //downlaod file through browser
        response.download(file.path, file.name);


    } catch (error) {
        console.error(error.message);
        return response.status(500).json({error: error.message})
    }
}