// components

// utils
import { tagEmail, tagEvent, tagPhone } from "@/src/utils/selects";
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

const FormNewContact = ({
  onChangeTagEmail = () => {},
  onChangeDate = () => {},
  onChangeTagEvent = () => {},
  onChangeTagPhone = () => {},
  dfPhone = () => {},
  dfEmail = () => {},
  dfDate = () => {},
  dfEvent = () => {},
}) => {
  return (
    <Grid>
      <Panel bordered shaded>
        <Row>
          <Col xs={24} sm={12} lg={12}>
            <CustomForm label="Nombre" type="text" name="firstName" />
            <CustomForm label="Apellido" type="text" name="lastName" />
            <CustomForm label="Empresa" type="text" name="bussiness_contact" />
            <CustomForm label="Teléfono" type="text" name="phone" />
            <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker
                data={tagPhone}
                defaultValue={dfPhone}
                style={{ width: "100%" }}
                onChange={onChangeTagPhone}
              />
            </FormGroup>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <CustomForm
              label="Correo Electrónico"
              inputAddon={<Icon icon="at" />}
              type="email"
              name="email"
            />

            <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker
                data={tagEmail}
                defaultValue={dfEmail}
                style={{ width: "100%" }}
                onChange={onChangeTagEmail}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Fecha Importante</ControlLabel>
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={dfDate}
                onChange={onChangeDate}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Etiqueta</ControlLabel>
              <SelectPicker
                data={tagEvent}
                style={{ width: "100%" }}
                defaultValue={dfEvent}
                onChange={onChangeTagEvent}
              />
            </FormGroup>
          </Col>
        </Row>
      </Panel>
    </Grid>
  );
};

export default FormNewContact;
