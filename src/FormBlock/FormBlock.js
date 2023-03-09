import style from "./style.js";

const FormBlock = () => {
    return <form style={style.form}>
        <div style={style.div}>
            <label style={style.label}>Login</label>
            <input type='text' style={style.input}/>
        </div>
        <div style={style.div}>
            <label style={style.label}>Password</label>
            <input type='password' style={style.input}/>
        </div>
        <div style={style.div}>
            <button style={style.button}>Submit</button>
        </div>
    </form>
}
export default FormBlock;