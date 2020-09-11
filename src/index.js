import React from 'react';
import ReactDOM from 'react-dom';

const myApp = () => <p>Componente funcional</p>;

ReactDOM.render(myApp(), document.getElementById('app'));

/*class App extends React.Component{
  render(){
    return(
      <p>Hello World</p>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("app"));*/
