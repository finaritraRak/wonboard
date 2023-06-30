import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez la feuille de style CSS de Quill

const Create = () => {
  const [title, setTitle] = useState('Mon article');
  const [body, setBody] = useState("Where does it come from?\nContrary to popular belief\n\n");
  const [author, setAuthor] = useState('fy');
  const [date, setDate] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const newDate = currentDate.toLocaleTimeString('he-IL', {
      day: 'numeric',
      month: 'numeric',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    setDate(newDate);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const blog = { title, body, author, date, img };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setIsPending(false);
        history('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
      <h2>Ajouter un nouveau post</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Titre:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="body" className="form-label">Contenu:</label>
          <ReactQuill
            value={body}
            onChange={(value) => setBody(value)}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'list',
              'bullet',
              'link',
              'image',
              'video',
            ]}
          />
               </div>

<div className="col-md-6">
  <label htmlFor="author" className="form-label">Auteur:</label>
  <select
    className="form-select"
    id="author"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
  >
    <option value="fy">fy</option>
  </select>
</div>

<div className="col-md-6">
  <label htmlFor="authorImage" className="form-label">Image:</label>
  <input
    type="file"
    className="form-control"
    id="authorImage"
    onChange={handleFileChange}
    accept="image/*"
  />
</div>

<div className="col-12">
  {!isPending && <button className="btn btn-primary" type="submit">Ajouter</button>}
  {isPending && <button className="btn btn-primary" disabled>Ajout du post...</button>}
</div>
</form>
</div>
);
};

export default Create;

