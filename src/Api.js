import { useState, useEffect } from 'react';


const Api = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) 
        { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })

      .then(data => { 
        setData(data);
      })


  }, [url])

  return { data };
}
 
export default Api;