import Box from "./Box";

interface IRowProps {
  row: number[];
  onPress: (index: number) => void;
}

export default function Row({ row, onPress }: Readonly<IRowProps>) {
  return (
    <div className="flex h-[100px] w-full gap-[1px]">
      {row.map(index => (
        <Box key={index} index={index} onPress={onPress} />
      ))}
    </div>
  );
}
