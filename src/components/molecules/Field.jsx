import Input from "../atoms/Input";
import Label from "../atoms/Label";
import './Field.css'

function Field(props) {
    return (
        <div id="field">
            <div>
                <Label text={props.text}/>
            </div>
            <div>
                <Input type={props.type} 
                placeholder={props.placeholder} 
                val={props.val} 
                fnVal={props.fnVal}
                />
            </div>
        </div>
      );
}

export default Field;