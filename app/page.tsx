"use client";
import * as Toast from "@radix-ui/react-toast";

import React from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Page() {
  let [toasts, setToasts] = React.useState<{ id: string; message: string }[]>(
    [],
  );

  return (
    <div className="flex p-2">
      <button
        onClick={() =>
          setToasts([...toasts, { id: "abc", message: "Changes saved!" }])
        }
        className="w-28 rounded border-t border-white/20 bg-sky-500 py-2 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-sky-600"
      >
        Notify
      </button>

      <Toast.Provider>
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            duration={1000000}
            className="flex items-center justify-between rounded border-gray-700 bg-gray-800 px-6 py-4 text-sm font-medium"
          >
            <Toast.Description>{toast.message}</Toast.Description>
            <Toast.Close className="text-gray-600 hover:text-gray-200">
              <XMarkIcon className="size-5" />
            </Toast.Close>
          </Toast.Root>
        ))}
        <Toast.Viewport className="fixed right-4 top-4 w-80" />
      </Toast.Provider>
    </div>
  );
}
