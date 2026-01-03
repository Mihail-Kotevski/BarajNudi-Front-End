const Button = ({ color = "", text = "" }) => {
  return (
    <>
      <button
        type="button"
        className={`text-gray-900 ${color} hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-gray-500 me-2`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;