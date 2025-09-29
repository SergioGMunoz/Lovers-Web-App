const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button 
      className={"btn-primary"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;