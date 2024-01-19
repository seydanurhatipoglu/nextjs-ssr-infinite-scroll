type Recipe = {
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  rating: number;
  reviewCount: number;
};

type InfiniteScrollProps = {
  loadMore: (request: PageableRequest) => Promise<any>;
  pagination: Pagination;
};

type PageableRequest = {
  limit: number;
  skip: number;
};

type PageableResponse<T> = {
  items: T[];
} & Pagination;

type Pagination = {
  limit: number;
  skip: number;
  total: number;
};
