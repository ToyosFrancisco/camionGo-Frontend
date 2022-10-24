// rsuite
import {
  Header,
  IconButton,
  Icon,
  Grid,
  Row,
  Col,
  Avatar,
  InputGroup,
  Input,
  FlexboxGrid,
} from "rsuite";

// owner Css
import style from "./Headers.module.css";

const Headers = ({onChange = () => {}}) => {
  return (
    <div className={style.wrapperContainer}>
      <Header>
        <Grid>
          <Row>
            <Col xs={8}>
              <div className={style.wrpIconButton}>
                <IconButton disabled icon={<Icon icon="bars" />} />
              </div>
            </Col>
            <Col xs={8}>
              <InputGroup>
                <Input onChange={onChange} placeholder="Buscar Contacto" />
                <InputGroup.Addon>
                  <IconButton icon={<Icon icon="search" />} />
                </InputGroup.Addon>
              </InputGroup>
            </Col>
            <Col xs={8}>
              <div className={style.wrpAvatar}>
                <Avatar
                  circle
                  src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </Header>
    </div>
  );
};

export default Headers;
