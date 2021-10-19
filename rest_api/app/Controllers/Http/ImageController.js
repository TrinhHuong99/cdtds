'use strict'
const Helpers = use('Helpers');

class ImageController {

    async fileUpload({request, response}) {
        const profilePic = request.file('file', {
            types: ['image', 'audio'],
            size: '10mb'
        })

        const timeNow = new Date()
        let fileName = profilePic.clientName.split('.')
        fileName = `${fileName[0]}_${timeNow.getTime()}.${fileName[1]}`
        // console.log(fileName);

        await profilePic.move(Helpers.publicPath('uploads'), {
            name: fileName,
            overwrite: true
        })

        if (!profilePic.moved()) {
            return response.json({
                code: 0,
                message: profilePic.error()
            })
        }

        // console.log(profilePic)
        return response.json({
            code: 1,
            data: {
                src: '/uploads/' + fileName,
                type: profilePic.type
            }
        })
    }
}

module.exports = ImageController
