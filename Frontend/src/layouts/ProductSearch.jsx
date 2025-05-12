import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  const navigate = useNavigate();

  // Category options mapping
  const categoryOptions = {
    'Wireline': ['Rope Socket', 'Centralizer', 'Hydraulic Jar', 'Knuckle Joint', 'Stem'],
    'Completions': ['Tubing Broach', 'Shifting Tool', 'Blind Box'],
    'Flow Control': ['Landing Nipple', 'Sliding Sleeve']
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedProductType(''); // Reset product type when category changes
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      // Redirect to search details page with the keyword as a query parameter
    navigate(`/search-details?keyword=${encodeURIComponent(searchKeyword)}`);
    }
  };

  // Handle pressing Enter in the search field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <section className="container-fluid position-relative" id="productSearch">
      <div className="productCard row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-md-2 navBg">
              <div className="my-2 py-1">
                <img src='productSearchIcon.png'/>
                <span className="white d-inline-flex align-items-center bold">
                  Product Search
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white shadow pb-4 regular">
            <div className="col-md-3">
              <label className="form-label small text-muted">Category</label>
              <select 
                className="form-select form-select-sm"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                {Object.keys(categoryOptions).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label small text-muted">Product Type</label>
              <select 
                className="form-select form-select-sm"
                value={selectedProductType}
                onChange={(e) => setSelectedProductType(e.target.value)}
                disabled={!selectedCategory}
              >
                <option value="">Select...</option>
                {selectedCategory && categoryOptions[selectedCategory].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label small text-muted">Product Name</label>
              <select className="form-select form-select-sm" disabled={!selectedProductType}>
                <option value="">Select...</option>
                {/* Product name options would go here if needed */}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label small text-muted">Search</label>
              <div className="input-group input-group-sm">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter keywords" 
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="btn btn-warning text-white"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>
  );
};

export default ProductSearch;