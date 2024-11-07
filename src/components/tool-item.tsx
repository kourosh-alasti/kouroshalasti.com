interface Props {
  title: string;
}

export default function ToolItem({ title }: Props) {
  return (
    <p className="inline rounded-full bg-indigo-300/80 px-2 py-1 hover:cursor-default hover:bg-indigo-500/50 text-center text-sm md:text-medium lg:text-base">
      {title}
    </p>
  );
}
