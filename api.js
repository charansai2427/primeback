import axios from "axios";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjFiYzY3NTBlYTY4YzQ0M2FhNGY4M2QwYjA2MWRmYiIsInN1YiI6IjY0NmM2MzlkMzNhMzc2MDEzYjNmOGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7dn4vlFceEKVQx1bxgk8VAG0ZEtHrLJcCEATypifqqQ'
  }
};


  const fetchData = async(options) => {
      try {
          const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)

          const resout = await res.json();
          console.log(resout);
      } catch (error) {
          console.log(error)
      }
  }
  fetchData(options);




  