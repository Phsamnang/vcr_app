import React from 'react'

export default function page() {
  return (
    <div>
<div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center text-dark mt-5">ចូលកម្មវិធី</h2>
      <div className="card my-5">
        <form className="card-body cardbody-color p-lg-5">
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
              className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
              width="200px"
              alt="profile"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="Username"
              aria-describedby="emailHelp"
              placeholder="User Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-color px-5 mb-5 w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    
    
    </div>
  )
}
