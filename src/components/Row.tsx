import Box from "./Box";

interface IRowProps {
  row: number[];
}

export default function Row({ row }: Readonly<IRowProps>) {
  return (
    <div className="flex h-[100px] w-full gap-[1px]">
      {row.map(index => (
        <Box key={index} index={index} />
      ))}
    </div>
  );
}
