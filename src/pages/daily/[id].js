// modules
import { useState } from "react";

// rsuite
import {
  Avatar,
  Icon,
  Grid,
  Panel,
  FlexboxGrid,
  ButtonToolbar,
  Button,
} from "rsuite";

//css
import style from "@/styles/Home.module.css";

// ajax
import serverAxiosUtils from "../../utils/serverAxios.utils";
import { ModalNumberPhone } from "@/src/common/components";
import Link from "next/link";

const ContactPage = ({ user, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const handlerOpenModal = (flag) => {
    setOpenModal(flag);
  };

  return (
    <Grid>
      <div className={style.wrpContainer}>
        <Avatar size="lg" circle style={{ backgroundColor: "#f34" }}>
          {!!user && user.firstName.charAt(0)}
        </Avatar>
      </div>
      <p className={style.nameSurname}>
        {" "}
        {!!user && user.firstName} {!!user && user.lastName}
      </p>

      <div className={style.containerContact}>
        <FlexboxGrid justify="center">
          <Panel bordered header="Información de contacto" shaded>
            {!!user &&
              user.personal_contact.map(({ tag, phone }) => {
                return (
                  <div style={{ marginBottom: 10 }}>
                    <Icon icon="phone" /> <p> {phone} </p>
                    <span>({tag})</span>
                  </div>
                );
              })}

            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <ButtonToolbar>
                <Button
                  onClick={() => handlerOpenModal(true)}
                  appearance="ghost"
                  block
                  size="xs"
                >
                  Agregar otro número
                </Button>
              </ButtonToolbar>
            </div>

            <div style={{ marginBottom: 10 }}>
              <Icon icon="envelope" />
              <p>{!!user && user.email.user_email}</p>
              <span>({!!user && user.email.tag})</span>
            </div>

            <div>
              <Icon icon="industry" />
              <p>{!!user && user.bussiness_contact}</p>
            </div>

            <div style={{ marginTop: 20 }}>
              <ButtonToolbar>
                <Button block appearance="primary">
                  Editar Contacto
                </Button>
              </ButtonToolbar>

              <div style={{marginTop:20}}>

              <Link href={"/daily"}>
                <a>
                  <Button block appearance="subtle"> Volver</Button>
                </a>
              </Link>
              </div>
            </div>
          </Panel>
        </FlexboxGrid>
      </div>

      <ModalNumberPhone
        id={id}
        openModal={openModal}
        handlerOpenModal={handlerOpenModal}
      />
    </Grid>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;

  const { data: response } = await serverAxiosUtils.get("api/users", {
    params: { id },
  });

  const { data: user } = response;

  return {
    props: { id, user }, // will be passed to the page component as props
  };
}
export default ContactPage;
