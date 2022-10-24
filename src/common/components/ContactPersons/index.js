// rsuite
import ajax from "@/src/utils/axios.utils";
import Link from "next/link";
import { useState } from "react";

// rsuite
import {
  Alert,
  Avatar,
  Button,
  Col,
  FlexboxGrid,
  Grid,
  Icon,
  IconButton,
  Row,
} from "rsuite";
// owner css
import style from "./ContactPersons.module.css";

const ContactPersons = ({
  initials = "",
  name = "",
  href = "",
  onClick = () => {},
}) => {
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

            <IconButton
              icon={<Icon icon="trash" style={{ color: "#e34" }} />}
              onClick={onClick}
              type="submit"
            />
          </FlexboxGrid>
        </Col>
      </Row>
    </Grid>
  );
};

export default ContactPersons;
