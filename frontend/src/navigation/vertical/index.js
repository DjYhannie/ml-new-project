import store from '../../store/index'

const admin = store.getters.StateUser.role !== 'admin'
const user = store.getters.StateUser.role !== 'user'

console.log(admin, user, store.getters.StateUser.role)

const navigation = [
  {
    title: 'Take Exam',
    route: 'user/take-exam',
    icon: 'FeatherIcon',
    // userRole: 'user',
    hide: user,
  },
  {
    title: 'History',
    route: 'user/history',
    icon: 'ClockIcon',
    hide: user,
  },
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
    // userRole: 'admin',
    hide: admin,
  },
  {
    title: 'Examinees',
    route: 'examinees',
    icon: 'UsersIcon',
    // userRole: 'admin',
    hide: admin,
  },
  {
    title: 'Questions',
    route: 'questions',
    icon: 'FileTextIcon',
    // userRole: 'admin',
    hide: admin,
  },
  {
    title: 'Questionnaire',
    route: 'questionnaire',
    icon: 'FileMinusIcon',
    // userRole: 'admin',
    hide: admin,
  },
]
console.log(navigation)
const navigate = navigation.filter(nav => !nav.hide)

export default navigate
