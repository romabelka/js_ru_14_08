import React, {Component, PropTypes} from 'react'

const dictionary = {
    menu: {
        ru: 'Меню',
        en: 'Menu'
    },
    new_app: {
        ru: 'Новое приложение',
        en: 'New app'
    },
    no_comments_yet: {
        ru: 'Еще нет комментариев',
        en: 'No comments yet'
    },
    hide_comments: {
        ru: 'скрыть комментарии',
        en: 'hide comments'
    },
    show_comments: {
        ru: 'показать комментарии',
        en: 'show comments'
    },
    new_article_form: {
        ru: 'Новая форма для записи',
        en: 'New Article form'
    },
    error: {
        ru: 'Ошибка',
        en: 'Error'
    },
    user: {
        ru: 'Пользователь',
        en: 'User'
    },
    username: {
        ru: 'Имя пользователя',
        en: 'Username'
    },
    current_language: {
        ru: 'Текущий язык',
        en: 'Current language'
    },
    please_select_article: {
        ru: 'Пожалуйста выберите статью',
        en: 'Please select article'
    }

};

/**
new: {
    ru: '',
    en: ''
},
*/

class Language extends Component {

    state = {
        language: 'ru'
    }

    static childContextTypes = {
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            language: this.state.language,
            dictionary
        }
    }

    render() {
        const { language } = this.state;

        return (
            <div>
                <div>
                    <span>
                        { `${dictionary.current_language[language]}: ${language}` }
                    </span>
                    <br/>
                    <button onClick={this.handleLanguageChange('ru')}>RU</button>
                    <button onClick={this.handleLanguageChange('en')}>EN</button>
                </div>
                { this.props.children }
            </div>
        )

    }

    handleLanguageChange = (language) => () => this.setState({ language })
}

export default Language;