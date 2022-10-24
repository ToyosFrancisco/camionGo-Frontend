//modules
import Link from 'next/link';

// style
import { IconButton, Icon } from 'rsuite';
import style from './NewContact.module.css';

const NewContact = ({  href }) => {
  return (
    <div className={style.wrpButton}>
      <Link href={href}>
        <a>
          <IconButton
            icon={
              <Icon icon='plus' size='lg' className={style.iconCancel} />
            }
            appearance='subtle'
            className={style.buttonGoTo}
          />
        </a>
      </Link>
    </div>
  );
};

export default NewContact;
