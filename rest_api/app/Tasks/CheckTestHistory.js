'use strict'

const Task = use('Task')
const Database = use('Database')

class CheckTestHistory extends Task {
    static get schedule() {
        return '0 */1 * * * *'
    }

    async handle() {
        console.log('CDTDS - CHECK TEST: START !')
        // get test history
        const testList = await Database.table('test_history')
        .where('status', 0)

        for (let index = 0; index < testList.length; index++) {
            
            const testHistory = testList[index];

            console.log('CDTDS - CHECK TEST: ' + testHistory.id)

            const timeStart = testHistory.time_start
            const timeNow = new Date().getTime() / 1000

            if ((timeNow - timeStart) < testHistory.test_time + 10) {
                continue;
            }
            if (!testHistory.test_data) {
                continue;
            }
            const data = JSON.parse(testHistory.test_data)
            if (!data.part) {
                continue;
            }

            const questionsData = await Database.table('questions')
            .where('exam_id', testHistory.exam_id)

            let score = 0;

            for (let index = 0; index < data.part.length; index++) {

                if (data.part[index].part_type == 0) {
                    for (let index2 = 0; index2 < data.part[index].questions.length; index2++) {
                        if (data.part[index].questions[index2].content_type != 5 && data.part[index].questions[index2].content_type != 4) {
                            const question = questionsData.filter(qs => qs.id == data.part[index].questions[index2].id)
                            if (question.length != 0) {
                                let optionData = JSON.parse(question[0].option_data)
                                optionData = optionData.filter(qs => qs.right_answer === 'true' || qs.right_answer === true)
                                const userAnswer = data.part[index].questions[index2].answers
                                if (optionData.length && userAnswer.length != 0) {
                                    let answerCheckFlag = true
                                    for (let index3 = 0; index3 < optionData.length; index3++) {
                                        try {
                                            const findIndex = userAnswer.findIndex(ans => ans === optionData[index3].id)
                                            if (findIndex === -1 || optionData[index3].right_answer === false) {
                                                answerCheckFlag = false
                                                break;
                                            }
                                        } catch (error) {
                                            answerCheckFlag = false
                                        }
                                    }
                                    if (answerCheckFlag) {
                                        score += 5;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Save
            await Database.table('test_history')
            .where('id', testHistory.id)
            .update({
                test_score: score,
                submit_time: Database.fn.now(),
                status: 1,
            })
        }

        console.log('CDTDS - CHECK TEST: END !')
    }
}

module.exports = CheckTestHistory
