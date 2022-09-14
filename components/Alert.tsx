const Alert = () => {
  return (
    <div className="alert alert-info flex w-1/2 justify-center shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 flex-shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="font-medium">
          To get the combined CSV file containing both Books and Magazines run
          the code in file /utils/combineCSV.mjs
        </span>
      </div>
    </div>
  );
};

export default Alert;
