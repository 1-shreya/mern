import React from "react";

function UpdateMuseum() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [datecreated, setDate] = useState();
  const [creatorname, setCreatorname] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getMuseums/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setCategory(result.data.category);
        setDate(result.data.datecreated);
        setCreatorname(result.data.creatorname);
      })

      .catch((error) => console.log(error));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
        name,
        category,
        datecreated,
        creatorname,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>MUSEUM USER</h2>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              id{" "}
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              category
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              datecreated
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              creatorname
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setCreatorname(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateMuseum;
