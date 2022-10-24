// component
import  Headers  from "@/src/common/components/Layout/Header";
import  Footers from "@/src/common/components/Layout/Footer";
// rsuite
import { Container, Content } from "rsuite";

// owner css
import style from "./DiaryLayout.module.css";

const DiaryLayout = ({ children }) => {
  return (
    <Container>
      <Headers />
      <Content className={style.wrapperContent}>{children}</Content>
      {/* <Footers /> */}
    </Container>
  );
};

export default DiaryLayout;
