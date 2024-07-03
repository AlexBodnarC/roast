import Container from "../_components/Container";
import Logo from "../_components/Logo";
import image from "../../public/images/OrangeLogo.png";
import MainText from "../_components/MainText";
import UploadPics from "./_components/UploadPics";

export default function page() {
  return (
    <Container color="gray">
      <Logo src={image} />
      <MainText />
      <UploadPics />
    </Container>
  );
}
