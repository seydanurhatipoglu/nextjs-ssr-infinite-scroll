import Image from "next/image";

export default function Recipe({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <Image src={recipe.image} alt="recipe-image" width={300} height={300} />
      <span>
        {recipe.name}
      </span>
    </div>
  )
}