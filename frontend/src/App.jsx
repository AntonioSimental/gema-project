import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulario</h1>
      <input id='email' type="email" placeholder='email'/>
      <input id='password' type="password" placeholder='contraseña'/>
      <input type="button" value="Enviar"/>
    </div>
  );
}

export default App;
