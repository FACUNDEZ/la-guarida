export const AlertCorrect = ({state, setState}: {state: boolean; setState: (value: boolean) => void }) => {
    return (
        <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-5">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <strong className="block font-medium text-gray-900"> Pedido realizado correctamente </strong>
                  </div>

                  <button onClick={() => setState(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
                    <span className="sr-only">Dismiss popup</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
    )
}

export const ErrorAlert = ({ title, state, setState }: { title: string; state: boolean; setState: (value: boolean) => void }) => {
  return (
  <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
    <div className="flex flex-col items-center gap-2">
      <span className="text-red-600">
        <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
          <path d="M9 8l6 8" />
          <path d="M15 8l-6 8" />
        </svg>
      </span>
      <strong className="block font-medium text-gray-900"> {title} </strong>
    </div>

    <button onClick={() => setState(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  )
}