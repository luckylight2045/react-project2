import './TeamContainer.css'
import React from 'react'
import Member from './Member/Member.js'

export default class TeamContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[
                {image:'team-1.jpg', name:"سید ابراهیم رییسی", job:'مدیر عامل',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک '},
                {image:'team-2.jpg', name:"پیتر پارکر", job:'آبدارچی',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک '},
                {image:'team-3.jpg', name:"دونالد ترامپ", job:'طراح گرافیک',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک '},
                {image:'team-4.jpg', name:"حسام خدری", job:'برنامه نویس',
                detail:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک '}
            ]
        }
    }
    render() {
        return(
            <div className="teamContainer">
                <div className="team-text col-12">
                    <h1><span>تیم</span> ما</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و</p>
                </div>
                <div className="members">
                    <Member {...this.state.images[0]}/> 
                    <Member {...this.state.images[1]}/> 
                    <Member {...this.state.images[2]}/> 
                    <Member {...this.state.images[3]}/> 
                </div>
            </div>
        )
    }
}