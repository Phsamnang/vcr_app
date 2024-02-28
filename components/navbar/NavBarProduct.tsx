import Link from "next/link";
export default function NavBarProduct() {
    return <>

            <nav className="navbar navbar-expand-lg  blur blur-rounded border-bottom z-index-3  d-none d-lg-block shadow w-100 mt-">
                <div className="container-fluid">
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
                                <Link href="/stock/category" className="nav-link">Category</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link href="/stock/product" className="nav-link">Product</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link href="/stock/menu" className="nav-link">Menu</Link>
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

}