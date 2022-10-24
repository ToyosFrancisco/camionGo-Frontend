// modules
import { useState, useEffect } from "react";
// components
import {
  ContactPersons,
  DiaryLayout,
  NewContact,
} from "@/src/common/components/";

// css
import style from "@/styles/Home.module.css";

//ajax
import ajax from "../../utils/axios.utils";
import { Alert } from "rsuite";

export default function Home() {
  const [user, setUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const queryUser = async () => {
    const { data: response } = await ajax.get("/api/users");

    setUser(response.data);
  };

  useEffect(() => {
    (async () => await queryUser())();
  }, []);

  // handler
  const handlerDelete = async (id) => {
    try {
      const response = await ajax.delete("api/users", {
        data: { id: id },
      });
      handlerRefresh(true);
      Alert.success("Eliminado");
      return response;
    } catch (ex) {
      Alert.error("No Eliminado");
      console.log("EX DELETE", ex.message);
    }
  };

  const handlerRefresh = (flag) => {
    if (flag) {
      queryUser();
    }
  };

  // sort
  const data = user.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));

  const filterSearch = data.filter((elem) => {
    return (
      elem.firstName.toLowerCase().includes(searchInput) &&
      elem.lastName.toLowerCase().includes(searchInput)
    );
  });

  const handlerSearch = (evt) => {
    setSearchInput(evt);
  };

  return (
    <DiaryLayout onChange={(evt) => handlerSearch(evt)}>
      <div className={style.title}>
        <h2> Tus Contactos </h2>
      </div>

      {filterSearch.map(({ firstName, lastName, _id }) => {
        return (
          <ContactPersons
            name={`${firstName} ${lastName}`}
            initials={firstName.charAt(0)}
            href={`daily/${_id}`}
            id={_id}
            onClick={() => handlerDelete(_id)}
          />
        );
      })}

      <NewContact href="/newContact" />
    </DiaryLayout>
  );
}
