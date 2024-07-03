import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import image from "../public/images/logo.png";
import Group from "../public/images/group.png";
import Link from "next/link";
import Container from "./_components/Container";

import Logo from "./_components/Logo";
import MainText from "./_components/MainText";

export default function Page() {
  return (
    <Container color="orange">
      <Logo src={image} />
      <MainText />
      <Image src={Group} alt="Next.js Logo" width={250} className="pb-28" />
      <Link href="/upload" className="w-full flex items-center justify-center">
        <Button size="xl" variant="white">
          Upload photos
        </Button>
      </Link>
    </Container>
  );
}
