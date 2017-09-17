import {Map} from 'immutable'

export function arrToMap(arr, RecordModel = Map) {
    return arr.reduce((acc, item) => acc.set(item.id, new RecordModel(item)), new Map({}))
}

export function mapToArr(obj) {
    return Object.values(obj)
}

export function getLocalization() {
    const dictionary = {
        'menu': {
            'en': 'menu',
            'ru': 'меню'
        },
        'article': {
            'en': 'article',
            'ru': 'статья'
        },
        'articles': {
            'en': 'articles',
            'ru': 'статьи'
        },
        'counter': {
            'en': 'counter',
            'ru': 'счетчик'
        },
        'filters': {
            'en': 'filters',
            'ru': 'фильтры'
        },
        'Username': {
            'en': 'Username',
            'ru': 'Имя пользователя'
        },
        'Please select article': {
            'en': 'Please select article',
            'ru': 'Выберите статью'
        },
        'hide comments': {
            'en': 'hide comments',
            'ru': 'скрыть комментарии'
        },
        'show comments': {
            'en': 'show comments',
            'ru': 'показать комментарии'
        }

    }
    
    return dictionary
}