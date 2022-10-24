// 
import { useState } from "react";
import { useRouter } from "next/router";

// components
import CustomForm from "../CustomForm";
// rsuite
import {
    Alert,
  Button,
  ControlLabel,
  Form,
  FormGroup,
  Modal,
  SelectPicker,
} from "rsuite";

// utils

import { tagPhone } from "@/src/utils/selects";
import ajax from "@/src/utils/axios.utils";

const ModalNumberPhone = ({
  openModal = false,
  handlerOpenModal = () => {},
  id
}) => {

    const router = useRouter()


    const [ form , setForm ] = useState({});
    const [selectTag ,setSelectTag ] = useState('');

    const handlerSubmit = async() => {

        const formData = {

            personal_contact: {
                tag: selectTag,
                phone: form.phone,
              },
        }

        try {
            const response = await ajax({
                method:'put',
                url:'api/me/profile',
                params:{id:id},
                data:formData
            })


            Alert.success('Guardado')

            router.push('/daily')
            return response;
        } catch (ex) {
            Alert.error('No Guardado')
            console.log('[SEND NEW NUMBER]',ex.message)
        }
    }


    // handler
    const handlerForm = (evt) => {
        setForm(evt)
    }

    const handlerSelectTag = (evt) => {
        setSelectTag(evt)
    }


  return (
    <Modal show={openModal} onHide={() => handlerOpenModal(false)}>
      <Form onChange={handlerForm} onSubmit={handlerSubmit}>
        <Modal.Header>
          <Modal.Title>Nuevo Número</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <CustomForm label="Teléfono" type='text' name='phone' />

          <FormGroup>
            <ControlLabel>Etiqueta</ControlLabel>
            <SelectPicker data={tagPhone} style={{ width: "100%" }} onChange={(evt) => handlerSelectTag(evt)} />
          </FormGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handlerOpenModal(false)} appearance="subtle">
            Cancelar
          </Button>
          <Button type="submit" appearance="primary">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalNumberPhone;
