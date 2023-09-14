import React, { useState } from 'react';

const Test = () => {
  const [title, settitle] = useState('');
  const [img, setimg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked')
    const data = {
      title: "ragav",
      price:123,
      desc:'thsi is description'
    };

    const formData = new FormData();
    // formData.append("ref","api::product.product");
    // formData.append("refId", "11");
    // formData.append("field", "img");
    formData.append("data", JSON.stringify(data));
    formData.append("files", img);


    try {
      const response = await fetch('http://localhost:1337/api/upload?populate=*', {
        method: 'POST',
        body: formData
      });
     const data = await response.json();
    console.log(data)
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form className='mt-12' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="file"
        name="img"
        onChange={(e) => setimg(e.target.files[0])}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Test;
