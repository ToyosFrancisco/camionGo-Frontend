// components

// rsuite
import { CustomForm } from "@/src/common/components";
import {
  Col,
  ControlLabel,
  FormGroup,
  Grid,
  Panel,
  Row,
  SelectPicker,
  Icon,
  DatePicker,
} from "rsuite";

// css
import style from "./FormNewContact.module.css";

const tagPhone = [
  {
    label: "Casa",
    value: "casa",
  },
  {
    label: "Celular",
    value: "celular",
  },
  {
    label: "Personalizado",
    value: "personalizado",
  },
];

const tagEmail = [
  {
    label: "Principal",
    value: "principal",
  },
  {
    label: "Trabajo",
    value: "tabajo",
  },
  {
    label: "Personalizado",
    value: "personalizado",
  },
];

const tagEvent = [
  {
    label: "Cumpleaños",
    value: "cumpleaños",
  },
  {
    label: "Aniversario",
    value: "aniversario",
  },
  {
    label: "Personalizado",
    value: "personalizado",
  },
]

const FormNewContact = ({
  onChangeTagEmail = () => {},
  onChangeDate = () => {},
  onChangeTagEvent = () => {},
  onChangeTagPhone = () => {}
}) => {
  return (
    <Grid>
        <Panel bordered shaded>
      <Row>
          <Col xs={24} sm={12} lg={12}>
            <CustomForm label="Nombre" type='text' name='firstName' />
            <CustomForm label="Apellido" type='text' name='lastName' />
            <CustomForm label="Empresa" type='text' name='bussiness_contact' />
            <CustomForm label="Teléfono" type='text' name='phone' />
            <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker data={tagPhone} style={{ width: '100%' }} onChange={onChangeTagPhone} />
            </FormGroup>
          </Col>
          <Col xs={24} sm={12} lg={12}>

            <CustomForm
              label="Correo Electrónico"
              inputAddon={<Icon icon="at" />}
              type='email'
              name='email'
            />

            <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker data={tagEmail} style={{ width: '100%' }} onChange={onChangeTagEmail}/>
            </FormGroup>


          <FormGroup>
              <ControlLabel>Fecha Importante</ControlLabel>
              <DatePicker style={{ width: '100%' }} onChange={onChangeDate}/>
            </FormGroup>
          <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker data={tagEvent} style={{ width: '100%' }} onChange={onChangeTagEvent} />
            </FormGroup>
          </Col>

         
      </Row>
        </Panel>
    </Grid>
  );
};

export default FormNewContact;
