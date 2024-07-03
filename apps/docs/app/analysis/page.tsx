import React from "react";
import Container from "../_components/Container";
import { Button } from "@repo/ui/components/ui/button";
import CustomCard from "./_components/Card";

export default function Analysis() {
  return (
    <Container color="gray">
      <h1 className="text-3xl pt-20 font-bold text-white">
        Get detailed report
      </h1>
      <CustomCard />
      <Button variant="orange" size="xl">
        Continue
      </Button>
    </Container>
  );
}
