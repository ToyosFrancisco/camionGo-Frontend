// rsuite
import Link from "next/link";
import { Button, ButtonToolbar, Col, FlexboxGrid, Grid, Row } from "rsuite";

// css
import style from "./HeaderNewContact.module.css";

const HeaderNewContact = ({label = '' , text = ''}) => {
  return (
    <div className={style.wrpContainer}>
      <Grid>
        <Row>
          <Col xs={12}>
            <h4>{label}</h4>
          </Col>

          <Col xs={12}>
            <FlexboxGrid justify="end">
              <ButtonToolbar>
                <Link href="/daily">
                  <a>
                    <Button appearance="subtle">Cancelar</Button>
                  </a>
                </Link>
                <Button type="submit" appearance="primary">
                  { text }
                </Button>
              </ButtonToolbar>
            </FlexboxGrid>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default HeaderNewContact;
