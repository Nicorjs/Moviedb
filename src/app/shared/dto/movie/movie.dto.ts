import { Belong } from '../../models/belongTocoll/belong.models';
import { Genres } from '../../models/genres/genres.models';
import { ImagesDto } from '../images/images.dto';
export class MovieDto {
    id: number;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: Belong[];
    genres: Genres[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: null;
    production_countries: null;
    release_date: string;
    runtime: number;
    title: string;
    images: ImagesDto;
}
