import { MovieDto } from '../movie/movie.dto';
export class MoviesDto {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieDto[];

}
