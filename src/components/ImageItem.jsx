import React, { Component } from 'react';
import '../assets/css/pictureSelect.css';

export default class ImageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }
    UNSAFE_componentWillMount() {
        this.props.selectValue.map(item => {
            if (this.props.pictures.id === item) {
                this.setState({
                    isChecked: true
                })
            }
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.selectValue && newProps.selectValue.length > 0) {
            newProps.selectValue.map(item => {
                if (this.props.pictures.id === item) {
                    this.setState({
                        isChecked: true
                    })
                }
            })
        } else {
            this.setState({
                isChecked: false
            })
        }
    }

    handleChange = (e) => {
        let checkedItem = {
            id: e.target.value,
            isChecked: e.target.checked
        }
        this.props.onChange(checkedItem)
        this.setState({
            isChecked: e.target.checked
        })

    }
    render() {
        return (
            <div className="imageItem">
                <input className="itemCheckBox" type="checkbox" value={this.props.pictures.id} onChange={this.handleChange.bind(this)} checked={this.state.isChecked} />
                <div className="imgContent">
                    <img src={this.props.pictures.url} className="itemImg" />
                </div>
                <p className="itemTitle" >{this.props.pictures.name}</p>
            </div>
        )
    }
}