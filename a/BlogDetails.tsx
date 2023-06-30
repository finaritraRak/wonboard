import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Spinners from './Spinners';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPanding } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        setDeleting(true);
        setTimeout(x, 2000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  function x() {
    history('/');
  }

  return (
    <div>
      <div className="blog-details">
        {isPanding && (
          <div className="loading">
            <Spinners />
          </div>
        )}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <div className="image-container">
              <img src={blog.img} alt="" className="img-fluid custom-image" />
              <div className="image-overlay">
                <h1 className="im-titre">{blog.title}</h1>
                <p className="written">written by {blog.author}</p>
              </div>
            </div>
            <p className="date">{blog.date}</p>
            <div className="blogBody">
              <ReactQuill
                readOnly
                value={blog.body}
                modules={{ toolbar: false }}
                formats={[]}
                className="quill-content"
              />
            </div>
            {!deleting && (
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            )}
            {deleting && (
              <button className="btn btn-danger" disabled>
                Deleting blog...
              </button>
            )}
            <br />
          </article>
        )}
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="comments-list">
          {/* Render comments here */}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="comment-form">
            <h4>Add a Comment</h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea className="form-control" id="comment" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
