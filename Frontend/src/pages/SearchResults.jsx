import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchDetails = () => {
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState('');
  
  useEffect(() => {
    // Extract the keyword from URL query params
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword');
    setSearchKeyword(keyword || '');
  }, [location.search]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2>Search Results for: {searchKeyword}</h2>
          <hr />
          
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Search Details</h4>
              <p className="card-text">
                This is a dummy paragraph showing search results for "{searchKeyword}". 
                In a real application, this would display actual search results from a database or API.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget 
                ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. 
                Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <p className="card-text">
                The selected product category would typically filter these results to show only relevant items
                from that category or product type. Additional filtering options could be added to refine the search further.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Specifications</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Model: Example-{searchKeyword.replace(/\s+/g, '-')}</li>
                <li className="list-group-item">Material: High-grade steel</li>
                <li className="list-group-item">Dimensions: Various</li>
                <li className="list-group-item">Compatible with: Multiple systems</li>
                <li className="list-group-item">Warranty: 1 year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;