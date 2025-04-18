import { Link } from "react-router-dom";

function NotFound() {
  return (
    <h1 className="font-bold text-3xl">
      Nothing to show here. Go to <Link to="/">Home</Link>
    </h1>
  );
}

export default NotFound;
