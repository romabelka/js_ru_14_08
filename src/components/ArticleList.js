import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker/index.js'
import moment from 'moment'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    state = {
        dateFilter: {
            from: null,
            to: null
        }
    };

    setArticlesDateFilter(range) {
        this.setState({
            dateFilter: {
                from: range.from,
                to: range.to
            }
        });
    }

    filterByDate(article) {

        if (!article.date) {
            return;
        }

        if (!this.state.dateFilter.from) {
            return true;
        }

        if (!this.state.dateFilter.to) {
            return moment(article.date).isBetween(
                moment(this.state.dateFilter.from),
                moment(this.state.dateFilter.from).add(1, 'd')
            );
        }

        return moment(article.date).isBetween(
            moment(this.state.dateFilter.from),
            moment(this.state.dateFilter.to)
        );
    }

    render() {

        const {openItemId, toggleOpenItem, articles} = this.props;

        const articleElements = articles
            .filter(this.filterByDate.bind(this))
            .map(article =>
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id === openItemId}
                        toggleOpen={toggleOpenItem(article.id)}
                    />
                </li>
            );

        const filters = <div>
            <h3>Отфильтровать статьи по дате:</h3>
            <DatePicker selectDateHandler={this.setArticlesDateFilter.bind(this)}/>
            <div>
                Показано: {articleElements.length} статей.
                {this.state.dateFilter.from && <b> За {moment(this.state.dateFilter.from).format('Do MMMM YYYY, h:mm:ss a')}</b>}
                {this.state.dateFilter.to && <b> по {moment(this.state.dateFilter.to).format('Do MMMM YYYY, h:mm:ss a')}</b>}
            </div>
        </div>;

        return (
            <div>
                {filters}
                <ul>
                    {articleElements}
                </ul>
            </div>
        )
    }
}

export default accordion(ArticleList)