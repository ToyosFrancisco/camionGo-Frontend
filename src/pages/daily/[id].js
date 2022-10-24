// rsuite
import { Avatar, Icon, Grid, Panel, FlexboxGrid, ButtonToolbar, Button } from "rsuite";

//css
import style from "@/styles/Home.module.css";

// ajax
import serverAxiosUtils from "../../utils/serverAxios.utils";

const ContactPage = ({ user, id }) => {
  console.log(user, "user");
  return (
    <Grid>
      <div className={style.wrpContainer}>
        <Avatar size="lg" circle style={{backgroundColor:'#f34'}}>
          {user.firstName.charAt(0)}
        </Avatar>
      </div>
      <p className={style.nameSurname}>
        {" "}
        {user.firstName} {user.lastName}
      </p>

      <div className={style.containerContact}>
        <FlexboxGrid justify="center">
          {user.personal_contact.map(({ tag, phone }) => {
            return (
              <Panel bordered header="Información de contacto">
                <div style={{ marginBottom: 10 }}>
                  <Icon icon="phone" /> <p> {phone} </p>
                  <span>({tag})</span>
                </div>

                <div style={{ marginBottom: 10 }}>
                  <Icon icon="envelope" />
                  <p>{user.email.user_email}</p>
                  <span>({user.email.tag})</span>
                </div>

                <div>
                  <Icon icon="industry" />
                  <p>{user.bussiness_contact}</p>
                </div>



              <div style={{marginTop:20}}>

                <ButtonToolbar>
                  <Button block appearance="primary">Editar Contacto</Button>
                </ButtonToolbar>
              </div>
              </Panel>
            );
          })}
        </FlexboxGrid>
      </div>
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
