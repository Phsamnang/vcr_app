'use client'
import Link from "next/link";
import {ReactNode} from "react";
import {signOut, useSession} from "next-auth/react";

export const SideBar = () => {
    const {data: session} = useSession();
    if (session?.user == null) return <></>
    return <>

        <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <Link
                    href="/"
                    className="d-block p-3 link-dark text-decoration-none"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Icon-only"
                >
                    <i className="bi-bootstrap fs-1"/>
                </Link>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li className="nav-item">
                        <Link
                            href="#"
                            className="nav-link py-3 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Home"
                        >
                            <i className="bi-house fs-1"/>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/stock"
                            className="nav-link py-3 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Dashboard"
                        >
                            <i className="bi bi-shop fs-1"/>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="attendance"
                            className="nav-link py-3 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Orders"
                        >
                            <i className="bi-table fs-1"/>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/employee"
                            className="nav-link py-3 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Customers"
                        >
                            <i className="bi-people fs-1"/>
                        </Link>
                    </li>
                    <li>
                        <a
                            onClick={()=>signOut()}
                            className="nav-link py-3 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Products"
                        >
                            <i className="bi bi-box-arrow-right fs-1"></i>
                        </a>
                    </li>

                </ul>
                {/*<div className="dropdown">*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"*/}
                {/*        id="dropdownUser3"*/}
                {/*        data-bs-toggle="dropdown"*/}
                {/*        aria-expanded="false"*/}
                {/*    >*/}
                {/*        <i className="bi-person-circle h2"/>*/}
                {/*    </a>*/}
                {/*    <ul*/}
                {/*        className="dropdown-menu text-small shadow"*/}
                {/*        aria-labelledby="dropdownUser3"*/}
                {/*    >*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                New project...*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                Settings*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                Profile*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </div>


    </>
}