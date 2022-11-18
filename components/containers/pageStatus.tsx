import { IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import Spinner from "../ui/spinner";

export type StatusProps = {
  isLoading?: boolean;
  error?: IFirebaseErrorCode | null;
};

export default function PageStatus(props: StatusProps) {
  const {isLoading, error} = props

  return (
    <>
      {(isLoading && <Spinner height={2} width={2} />) ||
        (error && (
          <div className="text-red-400 italic">
            {error?.code}: {error?.message}
          </div>
        ))}
    </>
  );
}
