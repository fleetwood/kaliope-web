import { useEffect, useState } from "react";
import { IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import Spinner, { SpinnerSize } from "../ui/spinner";

export type StatusProps = {
  watch?: any,
  isLoading?: boolean;
  error?: IFirebaseErrorCode;
};

export default function PageStatus(props: StatusProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<IFirebaseErrorCode|null>(null)
  const [watch] = useState(undefined)

  useEffect(() => {
    if(props) {
      if(props.watch!==undefined && props.watch!==null) {
        setIsLoading(false)
      }
      else {
        setError(props.error||null)
      }
    }
  },[props,isLoading,error,watch])

  return (
    <>
      {(isLoading && 
        <Spinner size={SpinnerSize.lg} />
      ) 
      || (error && (
        <div className="text-error italic">
          {error?.code}: {error?.message}
        </div>
      ))}
    </>
  );
}
