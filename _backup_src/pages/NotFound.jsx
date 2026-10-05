import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container mx-auto px-4 py-24 text-center">
    <h1 className="text-5xl font-bold">404</h1>
    <p className="mt-4">Page not found.</p>
    <Link to="/" className="mt-6 inline-block underline">Go Home</Link>
  </div>
);

export default NotFound;
