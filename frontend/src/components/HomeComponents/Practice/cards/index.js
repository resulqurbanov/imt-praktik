import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';


function Cards() {

  function dataget(){
    axios.get(`http://localhost:3000/categories/`).then((res) => {
      setProducts(res.data);
    });
  
  }
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dataget()
  }, []);

return (
  <>
  <Helmet>
    <title>Persons</title>
  </Helmet>
    {products.map((element) => {
      return (
        <>
          <div>
          <img src={element.imageUrl} alt=""/>
            <h1>{element.title}</h1>
            <h1>{element.description}</h1>
          </div>
        </>
      );
    })}
  </>
)};
export default Cards 