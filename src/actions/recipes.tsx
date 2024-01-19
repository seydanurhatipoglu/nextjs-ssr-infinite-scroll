"use server"
import Recipe from "@/components/Recipe";

export async function getRecipes({ limit, skip }: PageableRequest) {
  const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    .then(res => res.json())

  return { items: response.recipes, total: response.total, limit: response.limit, skip: response.skip } as PageableResponse<Recipe>
}

export async function getRecipesWithComponent(request: PageableRequest) {
  const recipes = await getRecipes(request);

  const { items, ...pagination } = recipes
  return {
    items: items.map((item, key) => <Recipe recipe={item} key={key} />),
    pagination
  }
}