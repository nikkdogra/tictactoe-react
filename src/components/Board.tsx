import { Card } from "@nextui-org/react";
import Row from "./Row";

export default function Board() {
  return (
    <Card className="mx-auto flex h-[200px] w-[240px] flex-col gap-[1px] rounded-none bg-secondary">
      <Row row={[0, 1, 2]} />
      <Row row={[3, 4, 5]} />
      <Row row={[6, 7, 8]} />
    </Card>
  );
}
