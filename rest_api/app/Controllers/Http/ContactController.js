'use strict'
const Database = use('Database')

class ContactController {

    async confirmContact ({ request, response}) {
        let { trackid, contactid, data } = request.all()

        let name, phone, email, province, age, sex, name_2, phone_2, email_2, province_2, age_2, sex_2, source

        //viet API khong bao gio chiu check input nguoi dung truoc khi insert vao trong CSDL - chiu cac ban
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
                    case 'sex':
                        sex = data[key] && Number.isInteger(parseInt(data[key])) ? data[key] : 0
                        break;
                    case 'province':
                        province = data[key]
                        break;
                    case 'phone_2':
                        phone_2 = data[key]
                        break;
                    case 'name_2':
                        name_2 = data[key]
                        break;
                    case 'email_2':
                        email_2 = data[key]
                        break;
                    case 'age_2':
                        age_2 = data[key]
                        break;
                    case 'sex_2':
                        sex_2 = data[key] && Number.isInteger(parseInt(data[key])) ? data[key] : 0
                        break;
                    case 'province_2':
                        province_2 = data[key]
                        break;
                    case 'source':
                        source = data[key]
                        break;
                    default:
                        break;
                }
            })
        }

        if(!trackid) {
            return response.json({
                code: 0,
                message: 'Thiếu tracking id'
            })
        }

        if (email == email_2) {
            return response.json({
                code: 0,
                message: 'Email nhóm không được trùng nhau'
            })
        }
        try {
            if (email && email != '') {
                const checkEmail = await Database.table('contact')
                .join('test_history', 'test_history.contact_id', 'contact.id')
                .select('test_history.status')
                .where(Database.raw("(contact.`email` = '"+ email +"' or contact.`email_2` = '"+ email +"') and contact.id != " + contactid ))
                .select('test_history.status')

                if (checkEmail.length) {
                    if (checkEmail.find(el => el.status == 1)) {
                        return response.json({
                            code: 3,
                            message: 'Bạn đã gửi bài thi với email này. Hãy chờ đợi kết quả từ chúng tôi nhé',
                            data: {
                                field: 'email',
                            }
                        })
                    } else {
                        return response.json({
                            code: 2,
                            message: 'Email đã được sử dụng. Vui lòng nhập một địa chỉ email khác',
                            data: {
                                field: 'email',
                            }
                        })
                    }
                }
            }

            if (email_2 && email_2 != '') {
                const checkEmail = await Database.table('contact')
                .join('test_history', 'test_history.contact_id', 'contact.id')
                .where('contact.email', email_2)
                .where(Database.raw("(contact.`email` = '"+ email_2 +"' or contact.`email_2` = '"+ email_2 +"') and contact.id != " + contactid ))
                .select('test_history.status')

                if (checkEmail.length) {
                    if (checkEmail.find(el => el.status == 1)) {
                        return response.json({
                            code: 3,
                            message: 'Bạn đã gửi bài thi với email này. Hãy chờ đợi kết quả từ chúng tôi nhé',
                            data: {
                                field: 'email_2',
                            }
                        })
                    } else {
                        return response.json({
                            code: 2,
                            message: 'Email đã được sử dụng. Vui lòng nhập một địa chỉ email khác',
                            data: {
                                field: 'email_2',
                            }
                        })
                    }
                }
            }

            // check contact and tracking

            const checkContactTracking = await Database.table('contact')
            .join('tracking', 'tracking.contact_id', 'contact.id')
            .first()

            if (checkContactTracking) {

                await Database.table('contact')
                .where('id', contactid)
                .update({
                    name,
                    phone,
                    email,
                    province,
                    age,
                    sex,
                    name_2,
                    phone_2,
                    email_2,
                    province_2,
                    age_2,
                    sex_2
                })

                return response.json({
                    code: 1,
                    message: 'Thành công',
                })
            } else {
                return response.json({
                    code: 0,
                    message: 'Không tìm thấy contact',
                })
            }
        } catch (e) {
            console.log(e);
            return response.json({
                code: 0,
                message: 'error'
            })
        }

    }

    async pushContact({request, response}) {
        let { trackid, data } = request.all()

        let name, phone, email, province, age, sex, name_2, phone_2, email_2, province_2, age_2, sex_2, source

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
                    case 'sex':
                        sex = data[key]
                        break;
                    case 'province':
                        province = data[key]
                        break;
                    case 'phone_2':
                        phone_2 = data[key]
                        break;
                    case 'name_2':
                        name_2 = data[key]
                        break;
                    case 'email_2':
                        email_2 = data[key]
                        break;
                    case 'age_2':
                        age_2 = data[key]
                        break;
                    case 'sex_2':
                        sex_2 = data[key]
                        break;
                    case 'province_2':
                        province_2 = data[key]
                        break;
                    case 'source':
                        source = data[key]
                        break;
                    default:
                        break;
                }
            })
        }

        if(!trackid) {
            return response.json({
                code: 0,
                message: 'Thiếu tracking id'
            })
        }

        if (email == email_2) {
            return response.json({
                code: 0,
                message: 'Email nhóm không được trùng nhau'
            })
        }

        if (email && email != '') {
            const checkEmail = await Database.table('contact')
            .join('test_history', 'test_history.contact_id', 'contact.id')
            .where('contact.email', email)
            .orWhere('contact.email_2', email)
            .select('test_history.status')
            if (checkEmail.length) {
                if (checkEmail.find(el => el.status == 1)) {
                    return response.json({
                        code: 3,
                        message: 'Bạn đã gửi bài thi với email này. Hãy chờ đợi kết quả từ chúng tôi nhé',
                        data: {
                            field: 'email',
                        }
                    })
                } else {
                    return response.json({
                        code: 2,
                        message: 'Email đã được sử dụng. Vui lòng nhập một địa chỉ email khác',
                        data: {
                            field: 'email',
                        }
                    })
                }
            }
        }

        if (email_2 && email_2 != '') {
            const checkEmail = await Database.table('contact')
            .join('test_history', 'test_history.contact_id', 'contact.id')
            .where('contact.email', email_2)
            .orWhere('contact.email_2', email_2)
            .select('test_history.status')
            if (checkEmail.length) {
                if (checkEmail.find(el => el.status == 1)) {
                    return response.json({
                        code: 3,
                        message: 'Bạn đã gửi bài thi với email này. Hãy chờ đợi kết quả từ chúng tôi nhé',
                        data: {
                            field: 'email_2',
                        }
                    })
                } else {
                    return response.json({
                        code: 2,
                        message: 'Email đã được sử dụng. Vui lòng nhập một địa chỉ email khác',
                        data: {
                            field: 'email_2',
                        }
                    })
                }
            }
        }

        const contact = await Database.table('contact')
        .insert({
            name,
            phone,
            email,
            province,
            age,
            sex,
            name_2,
            phone_2,
            email_2,
            province_2,
            age_2,
            sex_2
        })

        // insert contact tracking

        const params = await this.sourceParse(source);

        // Insert to history
        await Database.table('contact_history')
        .insert({
            contact_id: contact[0],
            source,
            data: JSON.stringify({
                name,
                phone,
                email,
                province,
                age,
                sex,
                name_2,
                phone_2,
                email_2,
                province_2,
                age_2,
                sex_2
            }),
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
                contact_id: contact[0]
            })
        }

        return response.json({
            code: 1,
            msg: 'success',
            data: contact[0]
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

    async getContact({request, response}) {
        let { page, start, end, phone, email, age, export_data } = request.all()

        if (!page) {page = 1}
        const limit = 50;

        let queryBuilder = Database.table('contact')
        // .leftJoin('test_history', 'test_history.contact_id', 'contact.id')
        // .distinct('contact.phone')
        queryBuilder.select('test_history.id as idbaithi', 'test_history.created_at as thoigianthamgia', 'test_history.test_data', 'test_history.test_score', 'contact.name', 'contact.phone', 'contact.age', 'contact.email', 'contact.sex', 'contact.province', 'contact.phone_2', 'contact.name_2', 'contact.age_2', 'contact.email_2', 'contact.sex_2', 'contact.province_2', 'contact.created_at as thoigiandangky', 'test_history.submit_time as thoigiannopbai', 'test_history.status as nopbai')

        .leftJoin('test_history', 'test_history.contact_id', 'contact.id')
        .orderBy('contact.created_at', 'desc')
        // .where('test_history.status', 1)

        if (start) {
            queryBuilder.where('contact.created_at', '>', start + ' 00:00:00')
        }

        if (end) {
            queryBuilder.where('contact.created_at', '<', end + ' 23:59:59')
        }

        if (phone) {
            queryBuilder.where('contact.phone', phone)
        }

        if (email) {
            queryBuilder.where('contact.email', email)
        }

        if (age) {
            queryBuilder.where('contact.age', age)
        }

        let resultData
        if (export_data == 'true') {
            resultData = await queryBuilder
            resultData = await this.contactTestHandle(resultData, export_data)
        } else {
            resultData = await queryBuilder.paginate(page, limit)
            resultData.data = await this.contactTestHandle(resultData.data, export_data)
        }

        return response.json({
            code: 1,
            data: resultData
        })
    }

    async contactTestHandle (resultData, export_data) {
        // const subscribe = await Database.table('subscribers')


        for (let index = 0; index < resultData.length; index++) {

            let testData
            try {
                testData = JSON.parse(resultData[index].test_data)
            } catch (error) {}
            resultData[index].hinhthuc = resultData[index].phone_2 ? 'Nhóm' : 'Cá nhân'
            resultData[index].sex = resultData[index].sex ? 'Nữ' : 'Nam'

            if (resultData[index].sex_2) {
                resultData[index].sex_2 = resultData[index].sex_2 ? 'Nữ' : 'Nam'
            }

            if (resultData[index].idbaithi) {
                resultData[index].thamgia = 'true'
                resultData[index].thoigianthamgia =  this.dateToTimeString(resultData[index].thoigianthamgia) + '<br>' + this.dateToDateString(resultData[index].thoigianthamgia)
            } else {
                resultData[index].thamgia = 'false'
                resultData[index].thoigianthamgia =  ''
            }

            if (resultData[index].nopbai == 1) {
                resultData[index].nopbai = 'true'
                if (resultData[index].thoigiannopbai) {
                    resultData[index].thoigiannopbai = this.dateToTimeString(resultData[index].thoigiannopbai) + '<br>' + this.dateToDateString(resultData[index].thoigiannopbai)
                }else{
                    resultData[index].thoigiannopbai = ''
                }
            } else {
                resultData[index].nopbai = 'false'
                resultData[index].thoigiannopbai = ''
            }

            resultData[index].dangky = 'true'
            resultData[index].thoigiandangky =  this.dateToTimeString(resultData[index].thoigiandangky) + '<br>' + this.dateToDateString(resultData[index].thoigiandangky)

            // const checkEmail1 = subscribe.find((el) => { el.email == resultData[index].email })
            // const checkEmail2 = subscribe.find((el) => { el.email == resultData[index].email_2 })

            // if (checkEmail1 || checkEmail2) {
            //     if (checkEmail1) {
            //         resultData[index].thoigiandangky = this.dateToTimeString(checkEmail1.created_at) + '<br>' + this.dateToDateString(checkEmail1.created_at)
            //     }
            //     if (checkEmail2) {
            //         resultData[index].thoigiandangky = this.dateToTimeString(checkEmail2.created_at) + '<br>' + this.dateToDateString(checkEmail2.created_at)
            //     }
            //     resultData[index].dangky = 'true'
            // }

            delete resultData[index].test_data
            delete resultData[index].created_at

            let answerCount = 1;

            if (export_data != 'true') {
                resultData[index].test = []
            }

            if (testData) {
                for (let index2 = 0; index2 < testData.part.length; index2++) {
                    for (let index3 = 0; index3 < testData.part[index2].questions.length; index3++) {
                        const element = testData.part[index2].questions[index3];

                        if (element.content_type == 4) {

                            if (export_data == 'true') {
                                let writing = ''

                                if (element.answers && element.answers != '') {
                                    try {
                                        writing = testData.part[index2].writing.replace(/<br>/g, '\n')
                                        writing = writing.replace(/(<([^>]+)>)/ig, '')
                                    } catch (error) {}
                                }
                                resultData[index]['test_'+ answerCount] = element.answers
                                answerCount++;
                            } else {
                                resultData[index].test.push({
                                    index: 'test_'+ answerCount,
                                    value: element.answers
                                })
                                answerCount++;
                            }

                        }
                    }
                }
            }
        }

        return resultData

    }


    async getContactTracking({request, response}) {
        let { page, start, end, phone, utm_source, utm_medium, utm_campaign, utm_term } = request.all()

        if (!page) {page = 1}
        const limit = 50;

        let contactList = Database.table('contact_history')
        .join('contact', 'contact_history.contact_id', 'contact.id')
        .select('contact.name', 'contact.phone', 'contact_history.utm_source', 'contact_history.utm_medium', 'contact_history.utm_campaign', 'contact_history.utm_term', 'contact_history.created_at')
        .orderBy('contact_history.created_at', 'desc')

        if (start) {
            contactList.where('contact_history.created_at', '>', start + ' 00:00:00')
        }

        if (end) {
            contactList.where('contact_history.created_at', '<', end + ' 23:59:59')
        }

        if (phone) {
            contactList.where('contact.phone', phone)
        }

        if (utm_source) {
            contactList.where('contact_history.utm_source', utm_source)
        }

        if (utm_medium) {
            contactList.where('contact_history.utm_medium', utm_medium)
        }

        if (utm_campaign) {
            contactList.where('contact_history.utm_campaign', utm_campaign)
        }

        if (utm_term) {
            contactList.where('contact_history.utm_term', utm_term)
        }

        return response.json({
            code: 1,
            data: await contactList.paginate(page, limit)
        })
    }

    dateToDateString(dateText) {
        const date = new Date(dateText)
        return `${date.getFullYear()}-${(`0${date.getMonth() + 1}`).slice(-2)}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    }
    dateToTimeString(dateText) {
        const date = new Date(dateText)
        return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()} : ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
    }
}

module.exports = ContactController
