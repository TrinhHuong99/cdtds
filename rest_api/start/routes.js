'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=> {

    // Thêm đề thi
    Route.post('/create-exam', 'TestController.createExam')
    // Sửa đề thi
    Route.post('/edit-exam', 'TestController.editExam')
    // Lấy list đề thi
    Route.get('/get-exam-admin', 'TestController.getExamAdmin').middleware(['cAuth'])
    // Xóa đề
    Route.post('/delete-exam', 'TestController.deleteExam').middleware(['cAuth'])

    // Xóa part đề
    Route.delete('/delete-exam-part', 'TestController.deleteExamPart').middleware(['cAuth'])
    // Lay part of de thi
    Route.get('/get-exam-part', 'TestController.getExamPart').middleware(['cAuth'])
    // Tạo part đề thi
    Route.post('/create-exam-part', 'TestController.createExamPart').middleware(['cAuth'])
    // Sửa part đề thi
    Route.post('/edit-exam-part', 'TestController.editExamPart').middleware(['cAuth'])

    // Lấy câu hỏi
    Route.get('/get-questions', 'TestController.getQuestion')

    // Manage lấy câu hỏi
    Route.get('/get-questions-admin', 'TestController.getQuestionAdmin').middleware(['cAuth'])

    // Manage xóa câu hỏi
    Route.delete('/delete-questions', 'TestController.deleteQuestion').middleware(['cAuth'])

    // Manage thêm câu hỏi
    Route.post('/add-questions', 'TestController.addQuestion').middleware(['cAuth'])

    // Manage sửa câu hỏi
    Route.post('/edit-questions', 'TestController.editQuestion').middleware(['cAuth'])

    // Khởi tạo bài thi
    Route.post('/test-init', 'TestController.initTest')

    // Lưu bài test
    Route.post('/test-save', 'TestController.saveTest')

    // Submit bài thi
    Route.post('/test-submit', 'TestController.submit')

    // Check test 
    Route.post('/test-check', 'TestController.testCheck')

    // get Test
    Route.post('/fetch-test', 'TestController.testGet')

    // Lấy kết quả bài thi
    Route.get('/get-result', 'TestController.getResult')

    
    Route.post('/update-position', 'TestController.updatePosition').middleware(['cAuth'])
    
    // Lấy bài làm đã lưu
    Route.get('/get-history', 'TestController.getHistory').middleware(['cAuth'])

    Route.post('/uploads', 'ImageController.fileUpload').middleware(['cAuth'])

    Route.get('/contact', 'ContactController.getContact').middleware(['cAuth'])
    Route.get('/test-history', 'TestController.getTestHistory').middleware(['cAuth'])
    Route.get('/test-detail', 'TestController.getTestDetail').middleware(['cAuth'])
    Route.get('/tracking', 'ContactController.getContactTracking').middleware(['cAuth'])
    
    // Tracking push contact
    Route.post('/track/push-contact', 'ContactController.pushContact')

    // Tracking push contact
    Route.post('/track/confirm-contact', 'ContactController.confirmContact')

    // Tracking gui event
    Route.get('/track/sendEvent', 'TrackController.sendEvent')
    // Tracking khởi tạo mã
    Route.get('/track/init', 'TrackController.createNewTrack')
    // Lấy các tracking utm
    Route.get('/tracking/utm-list', 'TrackController.getUtmList')

    Route.get('/run', 'TestController.runjob')

    Route.post('/account-verify', 'AccountController.verifyGoogle')

    Route.get('/report/synthetic', 'ReportController.SyntheticReport').middleware(['cAuth'])

    Route.get('/report/test-result', 'ReportController.TestResutl')

    Route.get('/test', 'TrackController.pushContactToCrmm')
	
	Route.post('/subscribe', 'SubController.createSub')

    Route.get('/subscribers', 'SubController.getSubs')

    Route.get('/provinces', 'CommonController.getProvinces')
	
	//checktime serve
	Route.get('/track/check-time', 'TrackController.checkTime')
}).prefix('/api')


Route.any('*', () => 'Where are you going ?')