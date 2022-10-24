// modules
import {
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock,
    InputGroup,
    Popover
  } from 'rsuite';
  
  // styles
  import styles from './CustomForm.module.css';
  
  const CustomForm = ({
    label,
    name,
    type,
    rows,
    componentClass,
    className,
    readOnly,
    classNameFC,
    placeholder,
    style = {},
    onChange,
    maxlength,
    inputAddon = null,
  }) => {
    return (
      <FormGroup>

        <ControlLabel className={ className }>
          { label }
        </ControlLabel>

        <InputGroup className={ styles.fullWidthInput }>
          {
            !!inputAddon &&
            <InputGroup.Addon>
              { inputAddon }
            </InputGroup.Addon>
          }

          <FormControl
            name={ name }
            type={ type }
            rows={ rows }
            placeholder={ placeholder }
            className={ classNameFC }
            componentClass={ componentClass }
            readOnly={ readOnly }
            style={ style }
            onChange={onChange}
            maxLength={maxlength}
            
          />
        </InputGroup>
      </FormGroup>
    );
  };
  
  export default CustomForm;