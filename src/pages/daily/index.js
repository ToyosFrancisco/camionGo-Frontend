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

export default function Home() {
  const [user, setUser] = useState([]);

  const queryUser = async () => {
    const { data: response } = await ajax.get("/api/users");

    setUser(response.data);
  };

  useEffect(() => {
    (async () => await queryUser())();
  }, []);

  return (
    <DiaryLayout>
      <div className={style.title}>
        <h2> Tus Contactos </h2>
      </div>

      {user.map(({ firstName, lastName,_id }) => {
        return (
          <ContactPersons
            name={`${firstName} ${lastName}`}
            initials={firstName.charAt(0)}
            href={`daily/${_id}`}
          />
        );
      })}

      <NewContact href="/newContact" />
    </DiaryLayout>
  );
}
