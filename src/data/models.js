import { fk, attr, Model } from 'redux-orm'

class User extends Model {}
User.modelName = 'User'
User.fields = {
  id: attr(),
  login: attr(),
  html_url: attr(),
  avatar_url: attr(),
}

class Repo extends Model {}
Repo.modelName = 'Repo'
Repo.fields = {
  id: attr(),
  name: attr(),
  full_name: attr(),
  owner: fk('User', 'repos'),
}

class Issue extends Model {}
Issue.modelName = 'Issue'
Issue.fields = {
  id: attr(),
  number: attr(),
  title: attr(),
  body: attr(),
  created_at: attr(),
  repository: fk('Repo', 'issues'),
  user: fk('User', 'issues')
}

class Comment extends Model {}
Comment.modelName = 'Comment'
Comment.fields = {
  id: attr(),
  body: attr(),
  created_at: attr(),
  user: fk('User', 'comments'),
  issue: fk('Issue', 'comments'),
}

export { User, Repo, Issue, Comment }
