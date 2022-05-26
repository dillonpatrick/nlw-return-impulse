import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequest,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#0f0"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="172 104 113.3 160 84 132"
            fill="none"
            stroke="#0f0"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></polyline>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="#0f0"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></circle>
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500  disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
