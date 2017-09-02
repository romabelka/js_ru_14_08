import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticleChart from './ArticleChart'
import UserForm from './UserForm'
import Counter from './Counter'
import Filters from './Filters'
import {connect} from 'react-redux'

class Root extends Component {
    render() {

        const {selectedId, selectDate, articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const filterArticlesId = []
        const filterArticlesIdAndDate = []

        if (!selectedId) {
          articles.forEach(article => filterArticlesId.push(article))
        } else {
          articles.forEach( article => {
            selectedId.forEach (selected => {
              if (selected == article.id) {
                filterArticlesId.push(article)
              }
            })
          })
        }

        if (selectDate.to) {
          filterArticlesId.forEach( article => {
              if (Date.parse(selectDate.from) < Date.parse(article.date.split('T')[0]) && Date.parse(selectDate.to) > Date.parse(article.date.split('T')[0])) {
                filterArticlesIdAndDate.push(article)
              }
          })
        }

        const finishFilterArticle = (filterArticlesIdAndDate.length > 0) ? filterArticlesIdAndDate : filterArticlesId

        return (
            <div>
                <p>{selectedId}</p>
                <h2>Menu</h2>

                <Filters options = {options}/>
                <Counter />
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <ArticleList
                      articles = {finishFilterArticle}
                      defaultOpenId = {finishFilterArticle[0].id}
                    />
                </div>
                <div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
  return {
    selectedId: state.selectedID,
    selectDate: state.selectDate,
    articles: state.article
  }
}

export default connect(mapStateToProps)(Root)
