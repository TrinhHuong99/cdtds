'use strict'
const Database = use('Database')

class CommonController {

    async getProvinces ({ request, response }) {
        const provinces = await Database.table('province')
        return response.json({
            code: 1,
            data: provinces
        })
    }
}

module.exports = CommonController
