// modules
import { useState } from "react";
import { useRouter } from "next/router";

// components
import {
  HeaderNewContact,
  FormNewContact,
} from "@/src/common/modules/NewContact/";
// rsuite
import { Alert, Form } from "rsuite";

// axios
import ajax from "../../utils/axios.utils";

const NewContactPage = () => {

  const router = useRouter()

  const [form, setForm] = useState({});
  const [selectTagDate, setSelectTagDate] = useState('');
  const [selectTagEmail, setSelectTagEmail] = useState('');
  const [selectTagEvent, setSelectTagEvent] = useState('');
  const [selectTagPhone, setSelectTagPhone] = useState('');

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
    console.log(formData,'form')




    try {


       

      const response = await ajax({
        method:'post',
        url:'/api/users',
        data:formData,

        
      })

      console.log(response ,'response')
      Alert.success('Se guardo correctamente')

      router.push('/')
      return response
    } catch (ex) {
      Alert.error('No se guardo')
      console.log("[SEND FORM ]", ex.message);
    }
  };

  // handlers
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
    <Form onChange={handlerForm} onSubmit={handlerSubmit}>
      <HeaderNewContact />
      <FormNewContact
        onChangeDate={handlerSelectTagDate}
        onChangeTagEmail={handlerSelectTagEmail}
        onChangeTagEvent={handlerSelectTagEvent}
        onChangeTagPhone={handlerSelectTagPhone}
      />
    </Form>
  );
};

export default NewContactPage;
