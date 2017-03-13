import { ORM } from 'redux-orm'
import { User, Issue, Comment, Repo } from './models'

const orm = new ORM()
orm.register(User, Issue, Comment, Repo)

export default orm
