//components
import { Header } from "../../components/Header";
import { UsersPost } from "../../components/Post/Users";

//styles
import { Container, Feed } from "./styles";

const posts_types = {
  users: <UsersPost />,
};
export function Home() {
  return (
    <Container>
      <Header />
      <Feed>{posts_types["users"]}</Feed>
    </Container>
  );
}
