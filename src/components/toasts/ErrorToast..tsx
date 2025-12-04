import { ToastContentProps } from "react-toastify";
import ToastLayout from "./ToastLayout";
import { XCircle } from "@deemlol/next-icons";

type Props = Partial<ToastContentProps> & {
  title?: string;
  description?: string;
};

function ErrorToast({ title, description }: Props) {
  return (
    <ToastLayout className="bg-red-100">
      <div className="text-red-900 flex items-center">
        <XCircle className="mr-4 min-w-fit" />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </ToastLayout>
  );
}

export default ErrorToast;
