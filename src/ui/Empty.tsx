
type EmptyProps = {
  name: string;
};

const Empty = ({ name }: EmptyProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-2xl font-semibold">No {name} Found.</h1>
    </div>
  );
};

export default Empty;

