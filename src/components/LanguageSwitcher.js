import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SUPPORTED_LANGS} from '../i18n';
import Select from 'react-select'


class LanguageSwitcher extends Component {
    static propTypes = {
        changeLang : PropTypes.func.isRequired
    };

    render() {
        const {changeLang, selected} = this.props;
        const options = SUPPORTED_LANGS.map(lang => ({label: lang, value: lang}));
        return (
            <Select options={options}
                    value={selected}
                    onChange={(selected) => changeLang(selected.value)}/>
        );
    }
}



export default LanguageSwitcher;
