"use client"

import { useEffect, useState } from 'react';
import withAuth from '../shared/components/withAuth';

function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwt');
      const res = await fetch('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default withAuth(DashboardPage)