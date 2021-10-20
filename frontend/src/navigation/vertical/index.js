import store from '../../store/index'

const admin = store.state.users.role !== 'admin'
const user = store.state.users.role !== 'user'
// const userRole = store.getters.StateUser
// console.log(userRole)

const navigation = [
  {
    title: 'Take Exam',
    route: 'user/take-exam',
    icon: 'FeatherIcon',
    // userRole: 'user',
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
// console.log(navigation)
// const navigate = navigation.filter(nav => nav.userRole === userRole)
const navigate = navigation.filter(nav => nav.hide)
// console.log(userRole, navigate)

export default navigate
