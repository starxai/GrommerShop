const isLocal = false ;

const Context = isLocal
  ? "http://127.0.0.1:8000"
  : "https://groomerapp-e1f70ad38863.herokuapp.com";

export default Context;
