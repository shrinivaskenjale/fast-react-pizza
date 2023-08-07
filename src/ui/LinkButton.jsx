import { Link } from "react-router-dom";

const LinkButton = ({ children, ...rest }) => {
  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
