interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return error ? (
    <p className="text-red-400 text-sm mt-1">{error}</p>
  ) : null;
};

export default ErrorMessage;