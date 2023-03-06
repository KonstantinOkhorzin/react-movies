import Container from "../UI/Container";

const MovieDataView = ({ Poster, Title, Plot, Actors }) => {
  return (
    <Container>
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p>{Plot}</p>
      <p>{Actors}</p>
    </Container>
  );
};

export default MovieDataView;