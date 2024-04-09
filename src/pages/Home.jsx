import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Box office</h1>
      <Link to="/starred">Starred</Link>
    </div>
  );
};

export default Home;
