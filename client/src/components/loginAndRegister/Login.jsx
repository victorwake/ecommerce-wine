import style from "./login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginClose} from "../../redux/action/index";

export default function Login() {
    const dispatch = useDispatch();
    const [loginActive, setLoginActive] = useState(false);

  const handleLoginOpen = () => {
    dispatch(loginClose(false))
  };

    const activeLogin = () =>{
        if(loginActive){
        setLoginActive(false)
        }else{
            setLoginActive(true)
        }
    }

  return (
    <div className={style.body}>
    <div className={style.main}>
      <div className={style.signup}>
      <div className={style.close_conteiner}>
      <button onClick={handleLoginOpen} className={style.close}>x</button>
      </div>
        <form>
          <label onClick={activeLogin} className={!loginActive? style.label : style.label_disabled} aria-hidden="true">Sign up</label>
          <input
          className={style.input}
            type="text"
            name="txt"
            placeholder="User name"
            required
          ></input>
          <input className={style.input} type="email" name="email" placeholder="Email" required></input>
          <input
          className={style.input}
            type="password"
            name="pswd"
            placeholder="Password"
            required
          ></input>
          <button  className={style.button}>Sign up</button>
        </form>
      </div>
      <div className={loginActive ? style.login_active : style.login}>
        <form>
          <label onClick={activeLogin}  className={style.label} aria-hidden="true">Login</label>
          <input className={style.input} type="email" name="email" placeholder="Email" required></input>
          <input
          className={style.input}
            type="password"
            name="pswd"
            placeholder="Password"
            required
          ></input>
          <button className={style.button}>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
