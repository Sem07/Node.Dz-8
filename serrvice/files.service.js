const { Cars_Files } = require('../base/models');

module.exports = {
    createFiles: (data, carId) => Cars_Files.create(
        {
            type: data.fileExtension, file: data.filePath, car_id: carId, user_id: data.userId
        }
    )

};
