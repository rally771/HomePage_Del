import { useEffect,useState } from "react"
import axios from "axios"

export default function Resources() {

  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchResourceCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ddic.hgsinteractive.com/api/home-resources');
        setCategories(response.data);
        setError(null);
        console.log(response.data)
      } catch (err) {
        setError('Failed to fetch resource categories');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchResourceCategories();
  }, []);
  if (loading) {
    return <div>Loading resource categories...</div>;
  }

  // Render error state
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="container-fluid py-5" id="resource">
      <div className="row">
        <div className="resourceDiv mx-auto">
          <div className="resourceContent">
            <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="bold">Resources</h2>
            <button className="regular d-inline-flex align-items-center">
              View All
            </button>
          </div>
          <p className="text-muted regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          </div>
          {
          Array.isArray(categories) ? (

          <div className="row g-4">
            
            {categories.map((item) => (
              <div key={item.nid[0].value} className="col-md-3 pe-0 cardResource">
                <div className="card h-100 shadow-sm">
                  <img src={item.field_image[0].url} className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title bold">{item.title[0].value}</h5>
                    <p className="card-text text-muted regular mb-3">
                      {item.body[0].value}
                    </p>
                    <button className="btn btn-link text-warning p-0 d-inline-flex align-items-center">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          ):(
             <div>
          <p>Data received but not in expected format.</p>
          <pre>{JSON.stringify(categories, null, 2)}</pre>
        </div>
          )
          }
        </div>
      </div>

    </section>

  )
}