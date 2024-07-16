import style from "../index.module.css"
function Hero(props){
    let link;
    if(props.location === "JAPAN"){
        link = "https://www.britannica.com/place/Mount-Fuji"
    }else if(props.location === "AUSTRALIA"){
        link="https://www.sydneyoperahouse.com/"
    }else if(props.location=== "NORWAY"){
        link="https://www.visitnorway.com/places-to-go/fjord-norway/the-geirangerfjord/"
    }
    return(
        <div>
            <section className={style.section}>
                <div >
                    <img src={`/images/${props.img}`} className={style.location_image} alt=""/>
                </div>
                <div className={style.location_side}>
                    <img src={`/images/${props.locationIcon}`} className={style.location_icon} alt=""/>
                    <p className={style.location}>{props.location}</p>
                    <a className={style.link} href={link}>{ props.locationLink}</a>

                </div>

                <div className={style.location_name_section}>
                    <div>
                    <h1 className={style.location_name}>{props.locationName}</h1>
                </div>
                <div>
                    <p className={style.duration}>{props.duration}</p>
                </div>
                <div>
                    <p className={style.location_info}>{props.locationInformation}</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;