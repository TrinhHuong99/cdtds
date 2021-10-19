'use strict'
// const Helpers = use('Helpers');
const Database = use('Database');
class SubController {
  isEmail(str) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(str) ? str : false;
  }
    /** create Subscriber */
  async createSub({ request, response }) {

        const {name, email} = request.all()
        try{
          if (!(name && email)) {
              return response.json({
                  code: 0,
                  message: 'Vui lòng nhập tên hoặc email!'
              })
          }
          if (!this.isEmail(email)) {
              return response.json({
                  code: 0,
                  message: 'Vui lòng nhập đúng email!'
              })
          }
          // check mail in db
          let subsID = await Database.table('subscribers')
          .where('email', email)
          .select('id')
          .first()

          if (subsID) {
            return response.json({
                code: 0,
                message: 'Bạn đã đăng ký nhận thông tin với email này. Vui lòng nhập một địa chỉ email khác'
            })
          }
          subsID = await Database.table('subscribers')
          .insert({
              email,
              name,
          })
          if (!subsID) {
              return response.json({
                  code: 0,
                  message: 'Có lỗi khi lưu dữ liệu!'
              })
          }
          return response.json({
              code: 1,
              message: 'success'
          })
        } catch (e) {
            return response.json({
                code: 0,
                data: 'không lưu được dữ liệu !'
            })
        }
    }

    /** Get list subscribers */
  async getSubs({ request, response }) {
       let { page, start, end, s_text, export_data} = request.all()

        if (!page) {page = 1}
        const limit = 50;

        let subscribersList = Database.table('subscribers')
        .select('subscribers.name','subscribers.email', 'subscribers.created_at')

        if (start) {
            subscribersList.where('subscribers.created_at', '>=', start + ' 00:00:00')
        }

        if (end) {
            subscribersList.where('subscribers.created_at', '<=', end + ' 23:59:59')
        }

        if (s_text) {
          subscribersList.where('email', 'like', '%' + s_text + '%')
                         .orWhere('name', 'like', '%' + s_text + '%')
        }

        let resultData
        if (export_data == 'true') {
            resultData = await subscribersList
        } else {
            resultData = await subscribersList.paginate(page, limit)
        }

        return response.json({
            code: 1,
            message: 'success',
            data: resultData
        })
  }

}

module.exports = SubController
