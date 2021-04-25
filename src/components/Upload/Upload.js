import React from "react";

const Upload = () => {
  const [uploadStr, setUploadStr] = React.useState("");

  const handleChange = (e) => {
    return setUploadStr(e.target.value);
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <div>
      <form action="post" onSubmit={handleSubmit}>
        <input type="text" value={uploadStr} onChange={handleChange} />
        <button type="submit" onSubmit={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
