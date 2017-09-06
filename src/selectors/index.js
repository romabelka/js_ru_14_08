import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.id
export const commentsSelector = state => state.comments

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'recomputing filtrated articles')
    const {selected, dateRange: {from, to}} = filters

    return Object.keys(articles).filter(id => {
        const published = Date.parse(articles[id].date)
        return (!selected.length || selected.includes(id)) &&
            (!from || !to || (published > from && published < to))
    }).reduce((acc, id) => ({
        ...acc,
        [id]:articles[id]}), {});
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})