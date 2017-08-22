import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false


        }

    }

    render() {
        const {comments} = this.props;
        return (
            <div>
                <button onClick = {this.handleClick}>{this.buttonText()}</button>
                {this.getEl()}
            </div>
        )
    }
    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen,


        });

    };
    getEl() {
        let obj = this.props.comments;

        function objNotEmpty(res) {
            for (let i in res) {
                return true;
            }
            return false;
        }

        if (objNotEmpty(obj)) {
            const el = obj.map(i => {
                return this.state.isOpen && <div key={i.id}>
                    <p>{i.user}</p>
                    <p>{i.text}</p>
                </div>
            });
            return (
                <div>{el}</div>
            )
        } else {
            return this.state.isOpen && <div><p>нет комментариев</p></div>

        }

    }
    buttonText(){

        if (this.state.isOpen){
            return  "Скрыть комментарии"
        } else {
            return "Показать комментарии"
        }
    }
}

export default Comment