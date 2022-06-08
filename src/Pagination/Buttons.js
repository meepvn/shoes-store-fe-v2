const Buttons = ({ itemsPerPage, totalItems, paginate }) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 0; i < numberOfPages; i++) pageNumbers.push(i);
  return (
    <div className="paginationButtons">
      {pageNumbers.map((item) => (
        <button key={item} onClick={() => paginate(item)}>
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
