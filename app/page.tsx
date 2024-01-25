"use client";
import * as Toast from "@radix-ui/react-toast";

import React from "react";

export default function Page() {
  return (
    <div className="flex p-2">
      <button className="text w-28 rounded border-t border-white/20 bg-sky-500 py-2">
        Notify
      </button>

      <Toast.Provider>
        <Toast.Root className="rounded bg-gray-700 p-4">
          <Toast.Description>Changes saved!</Toast.Description>
        </Toast.Root>

        <Toast.Viewport className="fixed right-0 top-0" />
      </Toast.Provider>
    </div>
  );
}
