import LoaderIcon from "react-loader-icon";

const LoadingPage = () => {
  return (
    <div className="bg-blue-600 h-screen text-white flex flex-row justify-center items-center">
      
      <LoaderIcon type={"spin"} />
    </div>
  )
}

export default LoadingPage
