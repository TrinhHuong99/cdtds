'use strict'
const Database = use('Database');

class ReportController {

    // Chấm điểm theo part
    countResutlOfPart(part) {
        if (!part) { return '' }
        let questionCount = 0;
        let questionRightCount = 0;
        for (let index = 0; index < part.questions.length; index++) {
            if (part.questions[index].content_type === 1 || part.questions[index].content_type === 2) {
                questionCount++;
            }
            if (part.questions[index].content_type === 3) {
                questionCount += part.questions[index].option_data.length;
            }
            questionRightCount += this.checkQuestionRight(part.questions[index])
        }

        return `'${questionRightCount}/${questionCount}`
    }

    checkQuestionRight(question) {
        let rightAnswer = 0;
        if (question.content_type === 1 || question.content_type === 2) {
            const questionRight = question.option_data.filter(qs => qs.right_answer === 'true' || qs.right_answer === true)
            if (questionRight.length === question.answers.length) {
                for (let index = 0; index < questionRight.length; index++) {
                    const findIndex = question.answers.findIndex(ans => ans === questionRight[index].id)
                    if (findIndex === -1 || questionRight[index].right_answer === false) {
                        return rightAnswer
                    }
                }
                rightAnswer = 1
            }
        } else {
            for (let index = 0; index < question.option_data.length; index++) {
                const answer = question.answers[index] && question.answers[index] !== '' ? question.answers[index].trim().toLowerCase() : ''
                const option = question.option_data[index].content ? question.option_data[index].content.trim().toLowerCase() : ''
                const optionArray = option.split('|')
                for (let index2 = 0; index2 < optionArray.length; index2++) {
                    const element = optionArray[index2];
                    if (element !== '' && answer !== '' && element === answer) {
                        rightAnswer += 1
                        break
                    }
                }
            }
        }
        return rightAnswer
    }

    async TestResutl ({ request, response }) {
        let { start, end, email, phone } = request.all()

        let testList = Database.table('test_history')
        .leftJoin('contact', 'test_history.contact_id', 'contact.id')
        .join('exam', 'exam.id', 'test_history.exam_id')
        .select('contact.id as contact_id', 'contact.name', 'contact.phone', 'contact.age', 'contact.email', 'test_history.created_at', 'test_history.confirm_phone', 'test_history.id as test_id', 'test_history.test_result')
        .where('test_history.status', 1)
        .orderBy('test_history.created_at', 'desc')

        if (start) {
            testList.where('test_history.created_at', '>', start + ' 00:00:00')
        }

        if (end) {
            testList.where('test_history.created_at', '<', end + ' 23:59:59')
        }

        if (phone) {
            testList.where('contact.phone', phone)
        }

        if (email) {
            testList.where('contact.email', email)
        }

        testList = await testList

        let data = []
        for (let index = 0; index < testList.length; index++) {
            let _testInfo = {
                stt: index + 1,
                name: testList[index].name,
                age: testList[index].age,
                phone: testList[index].phone,
                email: testList[index].email,
                confirm_phone: testList[index].confirm_phone,
                created_at: testList[index].created_at
            }
            const testData = JSON.parse(testList[index].test_result)
            // Loop for part
            for (let index2 = 0; index2 < testData.part.length; index2++) {
                if (testData.part[index2].part_type == 0) {
                    _testInfo['test_'+ (index2 + 1)] = this.countResutlOfPart(testData.part[index2])
                }

                if (testData.part[index2].part_type == 1) {
                    let writing = ''
                    if (testData.part[index2].writing && testData.part[index2].writing != '') {
                        writing = testData.part[index2].writing.replace(/<br>/g, '\n')
                        writing = writing.replace(/(<([^>]+)>)/ig, '')
                    }
                    _testInfo['test_'+ (index2 + 1)] = writing
                }
            }

            data.push(_testInfo)
        }

        return response.json({
            code: 1,
            data: data
        })

    }

    async SyntheticReport ({ request, response }) {
        let { date_start, date_end, utm_source, utm_medium, utm_campaign, utm_term, utm_content, phone, email, test_status, source , page, export_data } = request.all()

        if (!page) {page = 1}
        const limit = 200;

        let queryBuilder = Database.table('contact_history')
        .leftJoin('contact', 'contact.id', 'contact_history.contact_id')
        .leftJoin('test_history', 'test_history.contact_id', 'contact.id')
        .select('contact.name', 'contact.phone', 'contact.email', 'test_history.status', 'contact_history.source', 'contact_history.utm_source', 'contact_history.utm_medium', 'contact_history.utm_campaign', 'contact_history.utm_term', 'contact_history.utm_content', 'contact_history.created_at')
        
        if (date_start) {
            queryBuilder.where('contact_history.created_at', '>', date_start + ' 00:00:00')
        }

        if (date_end) {
            queryBuilder.where('contact_history.created_at', '<', date_end + ' 23:59:59')
        }
        
        if (utm_source) {
            queryBuilder.where('contact_history.utm_source', utm_source)
        }
        
        if (utm_medium) {
            queryBuilder.where('contact_history.utm_medium', utm_medium)
        }
        
        if (utm_campaign) {
            queryBuilder.where('contact_history.utm_campaign', utm_campaign)
        }
        
        if (utm_term) {
            queryBuilder.where('contact_history.utm_term', utm_term)
        }
        
        if (utm_content) {
            queryBuilder.where('contact_history.utm_content', utm_content)
        }
        
        if (phone) {
            queryBuilder.where('contact.phone', phone)
        }
        
        if (email) {
            queryBuilder.where('contact.email', email)
        }
        
        if (test_status) {
            queryBuilder.where('test_history.status', test_status)
        }
        
        if (source) {
            queryBuilder.where('contact_history.source', source)
        }
        
        let resultData
        if (export_data == 'true') {
            resultData = await queryBuilder
            for (let index = 0; index < resultData.length; index++) {
                resultData[index].status = resultData[index].status == 1 ? 'Đã hoàn thành' : 'Chưa hoàn thành'
                resultData[index].created_at = this.dateToTimeString(resultData[index].created_at) + '<br>' + this.dateToDateString(resultData[index].created_at)
            }
        } else {
            resultData = await queryBuilder.paginate(page, limit)
        }

        return response.json({
            code: 1,
            data: resultData
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

module.exports = ReportController
