export interface PaginatedData<T> {
    limit: number;
    page: number;
    order_by: string;
    total_rows: number;
    total_pages: number;
    rows: T[];
  }