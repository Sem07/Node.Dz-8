const uuid = require('uuid').v1();
const fs = require('fs-extra').promises;
const path = require('path');

const { carsServices, fileService } = require('../../serrvice');
const { CREATED, NO_CONTENT } = require('../../configs/status-codes');

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const cars = await carsServices.getCars();

            res.json(cars);
        } catch (e) {
            next(e);
        }
    },

    getOneCarsByModel: async (req, res, next) => {
        try {
            const { model } = req.params;

            const car = await carsServices.getCarsByModel(model);

            res.json(car);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        try {
            const {
                photos, docs, body: { car }, params: { userId }
            } = req;

            const newCar = await carsServices.createCar(car);

            if (photos) {
                const photoDir = `users/${userId}/cars/${newCar.id}/photos`;

                for (const photo of photos) {
                    const fileExtension = photo.name.split('.').pop();
                    const photoName = `${uuid}.${fileExtension}`;

                    fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), { recursive: true })
                        .then(() => photo.mv(path.resolve(process.cwd(), 'public', photoDir, photoName)))
                        .then(() => {
                            const filePath = path.join(photoDir, photoName);
                            fileService.createFiles({ fileExtension, filePath, userId }, newCar.id);
                        });
                }
            }

            if (docs) {
                const photoDir = `users/${userId}/cars/${newCar.id}/docs`;

                for (const doc of docs) {
                    const fileExtension = doc.name.split('.').pop();
                    const docName = `${uuid}.${fileExtension}`;

                    fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), { recursive: true })
                        .then(() => doc.mv(path.resolve(process.cwd(), 'public', photoDir, docName)))
                        .then(() => {
                            const filePath = path.join(photoDir, docName);
                            fileService.createFiles({ fileExtension, filePath, userId }, newCar.id);
                        });
                }
            }

            res.status(CREATED).json(newCar);
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const {
                photos, docs, body: { updateCar }, params: { id, userId }
            } = req;

            const db = await carsServices.updateCar(id, updateCar);
            if (photos) {
                const photoDir = `users/${userId}/cars/${id}/photos`;

                for (const photo of photos) {
                    const fileExtension = photo.name.split('.').pop();
                    const photoName = `${uuid}.${fileExtension}`;

                    fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), { recursive: true })
                        .then(() => photo.mv(path.resolve(process.cwd(), 'public', photoDir, photoName)))
                        .then(() => {
                            const filePath = path.join(photoDir, photoName);
                            fileService.createFiles({ fileExtension, filePath, userId }, id);
                        });
                }
            }

            if (docs) {
                const photoDir = `users/${userId}/cars/${id}/docs`;

                for (const doc of docs) {
                    const fileExtension = doc.name.split('.').pop();
                    const docName = `${uuid}.${fileExtension}`;

                    fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), { recursive: true })
                        .then(() => doc.mv(path.resolve(process.cwd(), 'public', photoDir, docName)))
                        .then(() => {
                            const filePath = path.join(photoDir, docName);
                            fileService.createFiles({ fileExtension, filePath, userId }, id);
                        });
                }
            }

            res.status(CREATED).json(db);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { id } = req.params;
            const car = await carsServices.deleteCar(id);

            res.status(NO_CONTENT).json(car);
        } catch (e) {
            next(e);
        }
    },
};
