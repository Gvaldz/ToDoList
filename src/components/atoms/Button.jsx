import './Button.css'

function Button({title, onClick, color}){
    const getColor = (color) => {
        switch (color) {
          case 'verde':
            return 'verde';
          case 'azul':
            return 'azul';
          case 'rojo':
            return 'rojo';
        }
      };
    
      return(
        <button onClick = {onClick} className = {`color ${getColor(color)}`}> {title} </button>
    )
}

export default Button;