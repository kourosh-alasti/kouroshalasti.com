interface Props {
  title: string;
}

export default function ToolItem({ title }: Props) {
  return (
    <p className="inline rounded-md bg-indigo-300/50 px-2 py-1 hover:cursor-default hover:bg-indigo-500/50">
      {title}
    </p>
  );
}
