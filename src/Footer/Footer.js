import './Footer.css'
import React from 'react'
import FooterContent from './FooterContent/FooterContent.js'

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[
                {title:'دسترسی سریع', text1:'خانه',
            text2:'درباره ما', text3:'خدمات', text4:'محصولات'},

            {title:'شبکه اجتماعی', text1:'فیسبوک', 
            text2:'لینکدین', text3:'اینستاگرام', text4:'توییتر'}
            ]
        }
    }
    render(){
        return(
            <div className="footer-container">
                <div className="footer-content">
                    <div className="input-container">
                        <input type="text" placeholder="ایمیل خود را وارد کنید" />
                        <a href="#">اشتراک</a>
                    </div>
                    <div className="footer-text">
                        <img src="fox-logo.png" alt="" />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی</p>
                    </div>
                    <FooterContent {...this.state.items[0]}/>
                    <FooterContent {...this.state.items[1]}/>
                    <div className="information">
                        <h6>تماس سریع</h6>
                        <p>تلفن : +98 123 456 789</p>
                        <p>ایمیل : info@yourcompany.com</p>
                        <p>آدرس :آدرس شرکت شما </p>
                    </div>
                </div>
                <div className="last-section">
                    <h6>designed by <span>Hesam Khedri</span></h6>
                </div>
            </div>
        )
    }
}