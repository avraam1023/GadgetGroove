export interface ProductQuery {
  page_size?: number;
  keywords?: string;
  category_id?: string;
  rating?: number;
  brand?: string;
  page_index?: number;
  sort_by?: SortProductBy;
  sort_direction?: SortDirection;
}

export type SortProductBy = 'rating' | 'price' | 'issue_date' | 'title';
export type SortDirection = 'asc' | 'desc';
