import React, { useState, useEffect } from 'react';
    import DataContext from './DataContext';
    const DataProvider = ({ children }) => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5175/api/data');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
          } catch (e) {
            setError(e);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);
      const value = { data, loading, error };
      return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
      );
    };
    export default DataProvider;