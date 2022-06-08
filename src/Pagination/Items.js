const Items = ({ isLoading, data }) => {
  if (isLoading) return <h2>Loading ...</h2>;
  return (
    <div className="itemsWrapper">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <h2>
            {index + 1}: {item?.title ?? item?.username}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Items;
