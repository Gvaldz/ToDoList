import TitleCard from "../atoms/TitleCard";
import Text from "../atoms/Text";
import Check from "../atoms/Check";
import './CardComplete.css'

function CardCompleted(props) {
    return (
        <div id="cards_complete">
            <div id="text">
            <TitleCard text={props.titulo} />
            <Text text={props.descripcion} />
            </div>  
            <div id="check">
                <Check></Check>
            </div>

        </div>
    );
    
}

export default CardCompleted