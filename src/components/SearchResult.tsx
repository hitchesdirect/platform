import { Hits } from './Hits';

export class SearchResult {
	public took: number = 0;
	public hits: Hits = {} as Hits;
}
