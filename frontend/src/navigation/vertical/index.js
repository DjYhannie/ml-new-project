import store from '../../store/module/users'

const admin = store.state.users.role !== 'admin'
const user = store.state.users.role !== 'user'

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

const navigate = navigation.filter(nav => !nav.hide)

export default navigate
