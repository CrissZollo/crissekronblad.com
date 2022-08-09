interface projectProps {
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default function Project({
  id,
  name,
  description,
  imageURL,
}: projectProps) {
  return (
    <>
      <img src={imageURL} alt={name} />
      <p>{name}</p>
    </>
  );
}
