import React, { Component } from 'react';
import PictureSelect from '../components/PictureSelect';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                {
                    id: '1',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '2',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '3',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                }
            ],
            value: ['1'],
        }
    }
    setValue = (val) => {
        console.log("pages", val)

    }
    render() {
        return (
            <PictureSelect pictures={this.state.pictures} value={this.state.value} onChange={(value) => this.setValue(value)} />
        )
    }
}
