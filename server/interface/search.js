import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/search'
})

const sign = 'bb9afbba667fd0deb80ea7faea3f1c5f'

router.get('/top', async (ctx) => {
  // try {
  //   let top = await Poi.find({
  //     'name': new RegExp(ctx.query.input),
  //     city: ctx.query.city
  //   })
  //   ctx.body = {
  //     code: 0,
  //     top: top.map(item => {
  //       return {
  //         name: item.name,
  //         type: item.type
  //       }
  //     }),
  //     type: top.length ? top[0].type : ''
  //   }
  // } catch (e) {
  //   ctx.body = {
  //     code: -1,
  //     top: []
  //   }
  // }
  let {status, data: {
    top
  }} = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200
      ? top
      : []
  }
})

export default router