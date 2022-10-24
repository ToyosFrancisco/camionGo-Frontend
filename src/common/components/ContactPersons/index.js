// rsuite
import Link from "next/link";
import { Avatar, Button, Col, FlexboxGrid, Grid, Row } from "rsuite";
// owner css
import style from "./ContactPersons.module.css";

const ContactPersons = ({ initials = "", name = "", href ='' }) => {
  return (
    <Grid>
      <Row>
        <Col xs={24}>
          <FlexboxGrid justify="center">
            <Link href={href}>
            <a>

            <Button className={style.buttonStyle}>
              <div className={style.wrpPerson}>
                <Avatar circle className={style.avatarStyle}>
                  <p>{initials}</p>
                </Avatar>
                <p className={style.textName}>{name}</p>
              </div>
            </Button>
            </a>
            </Link>
          </FlexboxGrid>
        </Col>
      </Row>
    </Grid>
  );
};

export default ContactPersons;
