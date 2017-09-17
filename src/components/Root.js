import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, { MenuItem } from './Menu'

export default class Root extends Component {

    state = {
        username: '',
        locale: 'en',
        dictionary : {
            ru:{
                article: 'Статья',
                app:'Новостное приложение',
                menu: 'Меню',
                username:'Логин',
                counter:'Счетчик',
                articles:'Статьи',
                filters:'Фильтры',
                increment:'Инкремент',
                selectArticleMessage:'Выберите статью',
                loadingMsg:'Загрузка...',
                hideComments:'скрыть комментарии',
                showComments:'показать комментарии',
                deleteMe:'удалить статью'
            },
            en:{
                article : 'Article',
                app : 'News App',
                menu: 'Menu',
                username:'UserName',
                counter:'Counter',
                articles:'Articles',
                filters:'Filters',
                increment:'Increment',
                selectArticleMessage:'Please select article',
                loadingMsg:'Loading...',
                hideComments:'hide comments',
                showComments:'show comments',
                deleteMe:'delete me'
            }
        }
    }

    static childContextTypes = {
        user: PropTypes.string,
        localize: PropTypes.func
    }

    getChildContext() {
        return {
            user: this.state.username,
            localize: this.setLocale
        }
    }
    
    render() {
        console.log('---', 1)
        return (
            <div>
                <button onClick={() => this.changeLocale('en')}>EN</button>
                <button onClick={() => this.changeLocale('ru')}>RU</button>
                <h2>{this.setLocale('menu')}</h2>
                <Menu>
                    <MenuItem link="counter" />
                    <MenuItem link="articles" />
                    <MenuItem link="filters" />
                </Menu>
                <div>
                    <h1>{this.setLocale('app')}</h1>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Redirect from="/" exact to="/articles" />
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/article" to="/articles" />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path="/error" render={() => <h1>Error</h1>} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        )

    }

    setLocale = text => this.state.dictionary[this.state.locale][text]

    changeLocale = lang => this.setState({ locale: lang})

    handleUserChange = (username) => this.setState({ username })

    getArticleForm = () => <h2>New Article form</h2>
}