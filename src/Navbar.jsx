import React from 'react'
const Navbar = () => {
    return (
        <>
            {/* NavBar */}
            <nav className='navbar navbar-expand-sm '>
                <div className="container-xxl">
                    <a href="#intro" className='navbar-brand'>
                        <span className='fw-bold text-secondary lead'>
                            s1v4h3r3
                        </span>
                    </a>

                    {/* toggle button for mobile nav */}
                    <button className="navbar-toggler" type='button' data-bs-toggle='collapse '
                        data-bs-target='#main-nav' aria-controls='main-nav' aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navbar links */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item text-light ">
                                <a class="nav-link active text-light-emphasis btn btn-outline-dark dropdown " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light btn btn-outline-dark " href="#">Link-1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light">Link-2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar