import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.id
export const commentsSelector = state => state.comments

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'recomputing filtrated articles')
    const {selected, dateRange: {from, to}} = filters

    let newArticles = {}
    Object.keys(articles).forEach(id => {
        const article = articles[id]
        const published = Date.parse(article.date)
        if ((!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))) {
            newArticles[id] = {...article}
        }
    })

    return newArticles
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})