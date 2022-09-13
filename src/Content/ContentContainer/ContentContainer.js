import './ContentContainer.css'

import Content from '../Content.js'

export default function ContentContainer() {
    const texts = [
        {text:'ما به شما زیبایی می دهیم تا زندگی خود را سرشار از امید کنید بنابراین به ما اعتماد کنید.'},
        {text:'حلول شما در مجموعه ما اینجا را سرشار از برکت و امید می کند که جهان را به مکانی بهتر تبدیل می کند.'},
        {text:'رسالت ما این است که بهترین باشیم و ذهنیت برنده را در جهان ایجاد کنیم باشد که موفق باشیم.'},
        {text:'شاهکاری که ما برای شما می توانیم بسازیم جهان را در حیرتی توامان با حسادت فرو خواهد برد.'}
      ]
      
    return(
        <div className="content-section">
        <div className="mobile-div"><img src="mobile-1.png" alt="" /></div>
        <div className="content-items">
          <div className="strong-text">
            <h1>کسب و کار را با ما آسان کنید</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون</p>
          </div>
          <Content {...texts[0]}/>
          <Content {...texts[1]}/>
          <Content {...texts[2]}/>
          <Content {...texts[3]}/>
        </div>
      </div>
    )
}