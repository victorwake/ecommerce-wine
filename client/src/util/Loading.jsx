import style from './loading.module.css'

export default function Loading(){
    return(
        <div class="content">

    <div className={style.load_wrapp}>
      <div className={style.load}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </div>

  </div>
    )
}