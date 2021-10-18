import store from '../../store/index'

const admin = store.getters.StateUser.role !== 'admin'
const user = store.getters.StateUser.role !== 'user'

console.log(admin, user, store.getters.StateUser.role)

const navigation = [
  {
    title: 'Take Exam',
    route: 'user/take-exam',
    icon: 'FeatherIcon',
    hide: user,
  },
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
    hide: admin,
  },
  {
    title: 'Examinees',
    route: 'examinees',
    icon: 'UsersIcon',
    hide: admin,
  },
  {
    title: 'Questions',
    route: 'questions',
    icon: 'FileTextIcon',
    hide: admin,
  },
  {
    title: 'Questionnaire',
    route: 'questionnaire',
    icon: 'FileMinusIcon',
    hide: admin,
  },
]
console.log(navigation)
const navigate = navigation.filter(nav => !nav.hide)

export default navigate
