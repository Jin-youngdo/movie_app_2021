// Function component는 함수의 일환으로 return 값이 존재하며 screen에 표시
// class component는 class형이기에 return 값이 존재하지 않지만,
// React.Component를 extends(확장)함으로 screen 표시
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // axios를 통한 api값 불러오기
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // this.setState({movies: movies})
    //   line_7 = state{movies} : line_16 = movies
  };

  componentDidMount() {
    /* // delay function
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    */
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

/* 
// react는 자동으로 class component의 render method를 실행한다.
class App extends React.Component {
  // state = 유동적인 값인 object
  state = {
    count: 0,
  };

  // set.state를 호출시마다 react는 rerender함
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    // this.setState({count : this.state.count -1});
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
*/

export default App;
