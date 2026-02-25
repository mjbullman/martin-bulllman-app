export interface SpotifyPaging<T> {
   items: T[],
   limit: number,
   next: string,
   offset: number,
   total: number,
}
