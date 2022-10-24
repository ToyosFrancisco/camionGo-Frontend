import { useState } from "react";
import { useRouter } from "next/router";
// components
import {
  FormNewContact,
  HeaderNewContact,
} from "@/src/common/modules/NewContact";

//ajax
import serverAxiosUtils from "@/src/utils/serverAxios.utils";
import ajax from "@/src/utils/axios.utils";
// rsuite
import { Alert, Form } from "rsuite";

const EditFormContact = ({ user = {}, id = "" }) => {
  const router = useRouter();

  const [form, setForm] = useState({});
  const [selectTagDate, setSelectTagDate] = useState("");
  const [selectTagEmail, setSelectTagEmail] = useState("");
  const [selectTagEvent, setSelectTagEvent] = useState("");
  const [selectTagPhone, setSelectTagPhone] = useState("");

  const [personal_contact] = user.personal_contact;
  const { user_email, tag } = user.email;
  const { tag: tags } = user.important_day;

  const update = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user_email,
    bussiness_contact: user.bussiness_contact,
    phone: personal_contact.phone,
  };

  // handlers
  const handlerSubmit = async () => {
    const formData = {
      email: {
        user_email: form.email,
        tag: selectTagEmail,
      },

      personal_contact: {
        tag: selectTagPhone,
        phone: form.phone,
      },

      bussiness_contact: form.bussiness_contact,

      important_day: {
        tag: selectTagEvent,
        day: selectTagDate,
      },

      firstName: form.firstName,
      lastName: form.lastName,
    };
    console.log(formData, "form");

    try {
      const response = await ajax.put("/api/users", { ...formData, id });

      Alert.success("Se guardo correctamente");

      console.log(response, "response");
      router.push("/daily");
      return response;
    } catch (ex) {
      Alert.error("No se guardo");
      console.log("[SEND FORM ]", ex.message);
    }
  };

  const handlerForm = (evt) => {
    console.log(evt, "evt");
    setForm(evt);
  };

  const handlerSelectTagDate = (evt) => {
    setSelectTagDate(evt);
  };

  const handlerSelectTagEmail = (evt) => {
    setSelectTagEmail(evt);
  };

  const handlerSelectTagEvent = (evt) => {
    setSelectTagEvent(evt);
  };

  const handlerSelectTagPhone = (evt) => {
    setSelectTagPhone(evt);
  };

  return (
    <Form
      formDefaultValue={update}
      onChange={handlerForm}
      onSubmit={handlerSubmit}
    >
      <HeaderNewContact label="Editar Contacto" text="Guardar" />
      <FormNewContact
        onChangeDate={handlerSelectTagDate}
        onChangeTagEmail={handlerSelectTagEmail}
        onChangeTagEvent={handlerSelectTagEvent}
        onChangeTagPhone={handlerSelectTagPhone}
        dfEvent={tags}
        dfPhone={personal_contact.tag}
        dfDate={user.important_day.day}
        dfEmail={tag}
      />
    </Form>
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
export default EditFormContact;
