import { createSelector } from 'reselect'

export const articlesSelector = state => state.articles
export const filterSelector = state => state.filters

export const filtratedArticleSelector = createSelector(articlesSelector,filterSelector,(articles, filters) => {
  const { selected, dateRange:{from, to}} = filters
  
      return articles.filter(article => {
          const parsedDate = Date.parse(article.date)
          return  (!selected.length || selected.includes(article.id)) && 
                  (!from || !to || (parsedDate <= to && parsedDate >= from))   
      })
})