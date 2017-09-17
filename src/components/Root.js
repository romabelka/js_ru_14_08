import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, { MenuItem } from './Menu'
import LangMenu, { LangMenuItem } from './LangMenu'

import history from '../history'



export default class Root extends Component {
    state = {
        username: '',
        leng: 'ru',
        lexicon: {
          en: {
            leng: 'en',
            user: "User",
            username: "User name",
            menu: "Menu",
            lengMenu: "Lang Menu",
            showComments: "Show Comments",
            news: "News",
            notFoundPage: "Not Found",
            notComentsYet: "Not Coments Yet",
            labelUser:"User",
            labelComment: "Comment",
            loading: "Loading",
            articleList: "Select Article"

          },
          ru: {
            leng: 'ru',
            user: "Пользователь",
            username: "Имя Пользователя",
            menu: "Меню",
            lengMenu: "Языковое меню",
            showComments: "Показать Коментарии",
            news: "Новости",
            notFoundPage: "Страница не найдена",
            notComentsYet: "Нет коментариев пока что",
            labelUser:"Пользователь",
            labelComment: "Коментарий",
            loading: "Загрузка",
            articleList: "Выберете статью"
          }
        }
    }

    static childContextTypes = {
        user: PropTypes.string,
        leng: PropTypes.string,
        toggleLeng: PropTypes.func,
        username: PropTypes.string,
        lexicon: PropTypes.object
    }

    render() {
        let {leng, lexicon} = this.state
        console.log(lexicon[leng].lengMenu);
      return (
      <div>
        <h2>{lexicon[leng].lengMenu}</h2>
        <LangMenu>
            <LangMenuItem link='ru' />
            <LangMenuItem link="en" />
        </LangMenu>
        <h2>{lexicon[leng].menu}</h2>
        <Menu>
            <MenuItem link='counter' />
            <MenuItem link="articles" />
            <MenuItem link="filters" />
        </Menu>
        <div>
            <h1>{lexicon[leng].news}</h1>
            <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
            <Switch>
                <Route path='/counter' component={Counter} exact />
                <Route path='/filters' component={Filters} />
                <Route path='/articles/new' render={this.getArticleForm} />
                <Route path='/article' to={`/articles`} />
                <Route path='/articles' component={ArticlesPage} />
                <Route path='/comments' component={CommentsPage}/>
                <Route path="/error" render={() => <h1>Error</h1>} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
      </div>
      )
    }
    getChildContext() {
        return {
            leng: this.state.leng,
            user: this.state.username,
            toggleLeng: (leng) => () => {
                  this.setState({leng: leng});
                //  e.stopPropagation();
            },
            lexicon: this.state.lexicon[this.state.leng]
        }
    }
    handleUserChange = (username) => this.setState({ username })
    getArticleForm = () => <h2>New Article form</h2>
}
