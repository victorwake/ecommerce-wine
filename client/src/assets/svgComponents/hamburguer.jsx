
export default function Hamburguer(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 32 32"
    //   width="60px"
    //   height="30px"
      {...props}
    >
      <path d="M26 16a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h16a2 2 0 0 1 2 2zM26 8a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h16a2 2 0 0 1 2 2zM26 24a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h16a2 2 0 0 1 2 2z" />
    </svg>
  );
}
