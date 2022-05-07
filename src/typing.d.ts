// interface Result {
// 	overview: string;
// 	release_date: Date;
// 	adult: boolean;
// 	backdrop_path: string;
// 	vote_count: number;
// 	genre_ids: number[];
// 	id: number;
// 	original_language: string;
// 	original_title: string;
// 	poster_path: string;
// 	title: string;
// 	video: boolean;
// 	vote_average: number;
// 	popularity: number;
// 	media_type: string;
// }
export interface Data {
	page: string;
	results: PopularMovieData[];
}

export interface PopularMovieData {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
