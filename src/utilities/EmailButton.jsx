import { EnvelopeIcon } from "@heroicons/react/24/outline";

const EmailButton = () => {
  return (
    <button className="flex bg-bg-tertiary text-white w-60 h-14 text-lg font-semibold justify-center items-center rounded-md">
      <EnvelopeIcon className="h-6 w-6 mr-3" />
      <span>hi@example.com</span>
    </button>
  );
};

export default EmailButton;
