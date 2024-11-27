import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();
  console.log(err)
    return (
    <div style={{margin:'200px'}}>
      <h1>OOPS SOMETHING WENT WRONG!</h1>
      <h2>{err.status}:{err.statusText}</h2>
    </div>
  );
};

export default Error;
