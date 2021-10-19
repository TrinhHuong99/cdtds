'use strict'
const { uuid } = require('uuidv4');
const Database = use('Database');
const { URL } = require('url');
const axios = use('axios')
const querystring = require('querystring');

class TrackController {

    async getUtmList({ request, response }) {
        let utm_source = await Database.table('utm_source').select('name')
        let utm_medium = await Database.table('utm_medium').select('name')
        let utm_campaign = await Database.table('utm_campaign').select('name')
        let utm_term = await Database.table('utm_term').select('name')
        let utm_content = await Database.table('utm_content').select('name')

        return response.json({
            code: 1,
            data: {
                utm_source: utm_source,
                utm_medium: utm_medium,
                utm_campaign: utm_campaign,
                utm_term: utm_term,
                utm_content: utm_content,
            }
        })
    }

    async sendEvent({ request, response}) {
        const { trackid, event_name, data } = request.all()

        if (trackid && event_name) {
            
            // Neu data co contact
            // Add contact
            if (data) {
                
            }
        }

        return response.json({
            code: 1,
            msg: 'success'
        })
    }

    async pushContactToCrmm(params) {

        try {
            await axios.post('https://hocmai.vn/ladipage/pushContactToCrmSpeakup.php', querystring.stringify(params), {
                    headers: { 
                        'content-type': 'application/x-www-form-urlencoded',
                    },
                }
            ).then(async (res) => {
                await Database.table('push-crm-status')
                .insert({
                    data: JSON.stringify(params),
                    response: JSON.stringify(res.data)
                })
            })
        } catch (error) {
            await Database.table('push-crm-status')
            .insert({
                data: JSON.stringify(params),
                response: JSON.stringify(error.message)
            })
        }
    }

    async pushContract({ request, response }) {
        const { trackid, data} = request.all()

        let phone, email, name, age, learned, source

        if (data) {
            Object.keys(data).forEach((key) => {
                switch (key) {
                    case 'phone':
                        phone = data[key]
                        break;
                    case 'name':
                        name = data[key]
                        break;
                    case 'email':
                        email = data[key]
                        break;
                    case 'age':
                        age = data[key]
                        break;
                    case 'learned':
                        learned = data[key]
                        break;
                    case 'source':
                        source = data[key]
                        break;
                    default:
                        break;
                }
            })
        }
        if (phone) {

            // await this.pushContactToCrmm({
            //     ldp: 'ican-placementtest',
            //     link: source,
            //     phone,
            //     name,
            //     email,
            //     team: 4
            // })

            // check Phone in db
            let contactID = await Database.table('contact')
            .where('phone', phone)
            .select('id')
            .first()

            if (!contactID) {
                contactID = await Database.table('contact')
                .insert({
                    phone,
                    email,
                    name,
                    age,
                    learned
                })
                contactID.id = contactID[0]
            } else {
                await Database.table('contact')
                .where('id', contactID.id)
                .update({
                    learned
                })
            }

            const params = await this.sourceParse(source);

            // Insert to history
            await Database.table('contact_history')
            .insert({
                contact_id: contactID.id,
                source,
                data: JSON.stringify(data),
                utm_source: params.utm_source,
                utm_medium: params.utm_medium,
                utm_campaign: params.utm_campaign,
                utm_term: params.utm_term,
                utm_content: params.utm_content,
            })

            if (trackid) {
                await Database.table('tracking')
                .where('tracking_hash', trackid)
                .update({
                    contact_id: contactID.id
                })
            }
        }

        return response.json({
            code: 1,
            msg: 'success'
        })
    }

    async sourceParse(source) {
        
        const urlParts = new URL(source)
        
        let params = {
            utm_source: urlParts.searchParams.get('utm_source'),
            utm_medium: urlParts.searchParams.get('utm_medium'),
            utm_campaign: urlParts.searchParams.get('utm_campaign'),
            utm_term: urlParts.searchParams.get('utm_term'),
            utm_content: urlParts.searchParams.get('utm_content')
        }

        if (params.utm_source) {
            const checkSource = await Database.table('utm_source').where('name', params.utm_source).first()
            if (!checkSource) {
                await Database.table('utm_source').insert({
                    name: params.utm_source
                })
            }
        }
        if (params.utm_medium) {
            const checkSource = await Database.table('utm_medium').where('name', params.utm_medium).first()
            if (!checkSource) {
                await Database.table('utm_medium').insert({
                    name: params.utm_medium
                })
            }
        }
        if (params.utm_campaign) {
            const checkSource = await Database.table('utm_campaign').where('name', params.utm_campaign).first()
            if (!checkSource) {
                await Database.table('utm_campaign').insert({
                    name: params.utm_campaign
                })
            }
        }
        if (params.utm_term) {
            const checkSource = await Database.table('utm_term').where('name', params.utm_term).first()
            if (!checkSource) {
                await Database.table('utm_term').insert({
                    name: params.utm_term
                })
            }
        }
        if (params.utm_content) {
            const checkSource = await Database.table('utm_content').where('name', params.utm_content).first()
            if (!checkSource) {
                await Database.table('utm_content').insert({
                    name: params.utm_content
                })
            }
        }

        return params
    }

    async createNewTrack({ request, response }) {
        const v4Code = uuid()

        try {
            await Database.table('tracking')
            .insert({
                tracking_hash: v4Code,
            })
            
            return response.json({
                code: 1,
                data: v4Code
            })
        } catch (error) {
            console.log(error)
        }
    }
	async checkTime(){
		if (new Date() > new Date('2021-09-23 23:59:59')) {
			return response.json({
				code: 1,
				msg: 'success'
			})
		}
		return response.json({
			code: 0,
			msg: 'false'
		})
	}
}

module.exports = TrackController
