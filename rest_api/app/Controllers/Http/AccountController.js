'use strict'
const {OAuth2Client} = require('google-auth-library');
const Database = use('Database')
const Hash = use('Hash')

class AccountController {

    async verifyGoogle ({ auth, request, response }) {
        const { id_token } = request.all()
        const client = new OAuth2Client('690316576713-kt4584n5g77usrrh7hv6f4keedrq7202.apps.googleusercontent.com');
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: '690316576713-kt4584n5g77usrrh7hv6f4keedrq7202.apps.googleusercontent.com'
        });
        const payload= ticket.getPayload();
        const userid = payload['sub'];
        let email = payload['email'];
        let emailVerified = payload['email_verified'];
        let name = payload["name"];
        let pictureUrl = payload["picture"];

        // Check user exist
        const userCheck = await Database.table('users')
        .where('email', email)
        .first()

        if (userCheck) {
            if (userCheck.role && userCheck.role !== '') {
                const token = await auth.generate(userCheck, {
                    email: userCheck.email,
                    name: userCheck.name,
                    picture: userCheck.picture,
                    role: userCheck.role,
                    ability: [
                        {
                            action: "manage",
                            subject: "all"
                        }
                    ]
                }, true)

                return response.json({
                    code: 1,
                    data: token
                })
            } else {
                return response.json({
                    code: 0,
                    message: 'Hãy liên hệ quản trị viên để được cấp quyền truy cập'
                })
            }
        } else {
            await Database.table('users')
            .insert({
                email,
                name,
                password: await Hash.make(''),
                picture: pictureUrl,
                role: ''
            })

            return response.json({
                code: 0,
                message: 'Hãy liên hệ quản trị viên để được cấp quyền truy cập'
            })
        }
    }
}

module.exports = AccountController
