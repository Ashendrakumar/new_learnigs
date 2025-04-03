import ImageSlider from "../shared/components/ImageSlider";
import { clientSideUtils } from "../utils/client-utils";
import { serverSideUtils } from "../utils/server-utils";

export default function Page() {
  const result = serverSideUtils();
  // const clientResult = clientSideUtils();
  return (
    <div>
      {result ?? "Server-side utility No result."}
      {/* {clientResult ?? "Client-side utility No result."} */}
      <ImageSlider />
      <h1>Server Route Page</h1>
      <p>Welcome to the server route page!</p>
    </div>
  );
}
