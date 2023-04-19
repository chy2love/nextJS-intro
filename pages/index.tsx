import { useState, useEffect } from 'react';
import axios from 'axios';
import Seo from '@/components/Seo';
const API_KEY = '10923b261ba94d897ac6b81148314a3f';
interface DataType {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}
interface ResultType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export default function Home() {
  const [movies, setMovies] = useState<ResultType[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        await axios
          .get<DataType>(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
          )
          .then(({ data }) => {
            console.log(data);
            const results: ResultType[] = data.results;
            console.log(results);
            setMovies(results);
          });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Now Loading...</h4>}
      {movies?.map((i) => {
        return <div key={i.id}>{i.original_title}</div>;
      })}
    </div>
  );
}
