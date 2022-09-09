import { Link } from 'react-router-dom';
const NavBArComponent = ({ logedUser }) => {
  const containesRole = role => {
    return logedUser.roles.includes(role);
  };
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Attendancy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            {containesRole('ROLE_STUDENT') && (
              <li className="nav-item">
                <Link to="/student" className="nav-link">
                  Student
                </Link>
              </li>
            )}

            {containesRole('ROLE_TEACHER') && (
              <li className="nav-item">
                <Link to="/teacher" className="nav-link">
                  Teacher
                </Link>
              </li>
            )}

            {containesRole('ROLE_ADMIN') && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="me-3">
          <b>Welcome :</b>
          {logedUser && <i class=""> {logedUser.email} </i>}
        </div>
        <b>|</b>
        <div className="logout ms-3">
          <Link to="/logout" className="nav-link">
            <i class="fa-solid fa-right-from-bracket"> </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBArComponent;
