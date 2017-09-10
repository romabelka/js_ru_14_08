import {createSelector} from 'reselect'
import {mapToArr} from '../reducer/utils'

export const articlesSelector = state => state.articles.entities.valueSeq().toArray()
export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.article.comments
export const commentsSelector = (state, props) => state.comments.entities.valueSeq().toArray()

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'recomputing filtrated articles')
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const articleCommentsSelector = createSelector(commentsSelector, idSelector, (comments, ids) => {
  return comments.filter(comment => ids.includes(comment.id))
})
