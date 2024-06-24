const isLocal = false ;

const Context = isLocal
  ? "http://127.0.0.1:8000"
  : "http://localhost:8000";

export default Context;
