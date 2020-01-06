import { Belong } from '../../models/belongTocoll/belong.models';
import { Genres } from '../../models/genres/genres.models';
export class MovieDto {
    id: number;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: Belong[];
    genres: Genres[];
    genre_id?: any[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    runtime: number;
    video: boolean;
    title: string;
    vote_average?: number;
    budget: number;
    revenue: number;
}
