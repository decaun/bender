import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

export const Sidebar = connect(state => ({
  MessageUsers: state.MessageUsers
}), {})(SidebarComponent)
