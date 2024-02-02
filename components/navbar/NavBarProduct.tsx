export default function NavBarProduct() {
    return <>
        <>
            <nav className="navbar navbar-expand-lg  blur blur-rounded top-0 border-bottom z-index-3 shadow w-100 mt-4 d-none d-lg-block my-3 py-2">
                <div className="container-fluid">
                    <a
                        className="navbar-brand font-weight-bolder ms-3"
                        href=""
                        rel="tooltip"
                        title="Designed and Coded by Creative Tim"
                        data-placement="bottom"
                        target="_blank"
                    >
                        Soft UI Design System
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navigation"
                        aria-controls="navigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav navbar-nav-hover mx-auto">
                            <li className="nav-item px-3">
                                <a className="nav-link">Pages</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link">Utilities</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link">Blocks</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link">Docs</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <button className="btn btn-sm  bg-gradient-dark  btn-round mb-0 me-1">
                                Buy Now
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>


    </>

}