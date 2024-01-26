"use client";
import * as Toast from "@radix-ui/react-toast";

import React from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Page() {
  return (
    <div className="flex p-2">
      <button className="text w-28 rounded border-t border-white/20 bg-sky-500 py-2">
        Notify
      </button>

      <Toast.Provider>
        <Toast.Root
          duration={10000000}
          className="flex items-center justify-between rounded border-gray-700 bg-gray-800 px-6 py-4 text-sm font-medium"
        >
          <Toast.Description>Changes saved!</Toast.Description>
          <Toast.Close>
            <XMarkIcon className="size-5" />
          </Toast.Close>
        </Toast.Root>

        <Toast.Viewport className="fixed right-4 top-4 w-80" />
      </Toast.Provider>
    </div>
  );
}
