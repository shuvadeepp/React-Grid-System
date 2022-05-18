import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <a className="navbar-brand" href="/"> {props.title} </a>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 text-white"> {props.home} </a></li>
                <li><a href="/" className="nav-link px-2 text-white"> {props.about} </a></li>
                <li><a href="/" className="nav-link px-2 text-white"> {props.pricing} </a></li>
                <li><a href="/" className="nav-link px-2 text-white"> {props.contact} </a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2"> {props.Login} </button>
                <button type="button" className="btn btn-warning"> {props.Sign} </button>
                </div>
            </div>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,            
    home: PropTypes.string.isRequired,            
    pricing: PropTypes.string.isRequired,            
    contact: PropTypes.string.isRequired,            
    Login: PropTypes.string.isRequired,            
    Sign: PropTypes.string.isRequired,            
}

Navbar.defaultProps = {
    title: "SHUVADEEP",
    about: "About Us",  
    home: "Welcome Home",   
    pricing: "Check pricing",
    contact:"Contact Us",
     Login:"Login Here",
     Sign:"Sign Up"  
  };