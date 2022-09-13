import './HeaderContent.css'


export default function HeaderContent() {
    return(
        <div className="content-container">
            <div className="text-container">
                <p className="shoma">شما با ما می توانید</p>
                <h1>موفق شوید</h1>
                <p className="lorem">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله</p>
                <a href="#">بیشتر بخوانید</a>
            </div>
            <div class="mobile-img">
                <div><img src="mobile-1.png" alt="" /></div>
            </div>
        </div>
    )
}