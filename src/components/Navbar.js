import style from "../index.module.css"
function Navbar(){
    return(
        <div className={style.navbar}>
            <img src="/images/logo.png" className={style.logo} alt="world"/>
            <p className={style.navbar_text}>my travel journal.</p>
        </div>
    )
}

export default Navbar;