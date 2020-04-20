import Vue from 'vue'
import Router from 'vue-router'

/* Route Modules */
import Index from '../pages/Index'
import PageRoute from './routes/page.route'
import DetailPageRoute from './routes/detail.route'
import MenuPageRoute from './routes/menupage.route'
import ClassVisitRoute from './routes/class.route'
import CompanyVisitRoute from './routes/company.route'
import NieRoute from './routes/nie.route'
import WorksheetRoute from './routes/worksheet.route'
import QuestionRoute from './routes/question.route'
import NieIntroRoute from './routes/nieintro.route'
import WorksheetDetailRoute from './routes/worksheetdetail.route'
import ClassVisitDetailRoute from './routes/classdetail.route'
import CompanyVisitDetailRoute from './routes/companydetail.route'
import NieChartRoute from './routes/niechart.route'
import InstructionRoute from './routes/instruction.route'
import Newspaper from './routes/newspaper.route'
import NewspaperPreview from './routes/newspaperpreview.route'
import NewspaperDetail from './routes/newspaperdetail.route'
import QuestionPreview from './routes/questionpreview.route'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      redirect: '/page',
      name: 'Index',
      component: Index,
      children: [
        PageRoute,
        DetailPageRoute,
        MenuPageRoute,
        ClassVisitRoute,
        CompanyVisitRoute,
        NieRoute,
        WorksheetRoute,
        QuestionRoute,
        NieIntroRoute,
        WorksheetDetailRoute,
        ClassVisitDetailRoute,
        CompanyVisitDetailRoute,
        NieChartRoute,
        InstructionRoute,
        Newspaper,
        NewspaperPreview,
        NewspaperDetail,
        QuestionPreview
      ]
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
