import React, { Component } from 'react';
import '../assets/css/pictureSelect.css';
import ImageItem from './ImageItem'

export default class PictureSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: [],//选中的数组
            isSelectAll: false
        }
    }

    cheakAllClick = (e) => {
        let isSelectAll = !this.state.isSelectAll
        let checkedList = []
        if (e.target.checked) {
            this.props.pictures.map((item, index) => {
                checkedList.push(item.id)
            })
        }
        this.setState({
            isSelectAll,
            checkedList
        },()=>{
            this.props.onChange(this.state.checkedList)
        })
    }


    setValue = (val) => {
        let checkedList = Object.assign([], this.state.checkedList);

        if (val.isChecked === true) {
            checkedList.push(val.id)
        } else {
            //检查数组中是否有这个id,如果有则移除
            checkedList.find((value, index) => {
                if (value === val.id) {
                    checkedList.splice(index, 1)
                }
            })
        }
        this.setState({
            checkedList
        }, () => {
            this.props.onChange(this.state.checkedList)
            //判断全选
            if (this.props.pictures.length > 0 && (this.props.pictures.length === checkedList.length)) {
                this.setState({
                    isSelectAll: true
                })
            } else {
                this.setState({
                    isSelectAll: false
                })
            }

        })
    }

    UNSAFE_componentWillMount() {
        //1.将选中的数组赋值，
        let checkedList = []
        for (let i in this.props.value) {
            checkedList[i] = this.props.value[i];
        }
        //判断全选
        if (this.props.pictures.length > 0 && (this.props.pictures.length === checkedList.length)) {
            this.setState({
                checkedList,
                isSelectAll: true
            })
        } else {
            this.setState({
                checkedList,
                isSelectAll: false
            })
        }

    }

    renderImageItem = picturesList => picturesList.map((item, index) => {
        return (
            <ImageItem pictures={item} selectValue={this.state.checkedList} onChange={(value) => this.setValue(value)} key={index} />
        )

    })

    render() {
        const { checkedList } = this.state
        const imageItem = this.renderImageItem(this.props.pictures);
        return (
            <div className="wrap">
                <div className="select-head">
                    <input type="checkbox" className="checkbox-head" onChange={this.cheakAllClick} checked={this.state.isSelectAll} />
                    <label>已选中{checkedList && checkedList.length}个文件</label>
                </div>
                <div className="imgeContent">
                    {imageItem}
                </div>
            </div>
        )

    }
}

