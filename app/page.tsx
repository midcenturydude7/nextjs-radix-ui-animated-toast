"use client";
import * as Toast from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
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
          setToasts([
            ...toasts,
            { id: window.crypto.randomUUID(), message: getRandomMessage() },
          ])
        }
        className="w-28 rounded border-t border-white/20 bg-sky-500 py-2 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-sky-600"
      >
        Notify
      </button>

      <Toast.Provider>
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <Toast.Root
              key={toast.id}
              duration={1000}
              onOpenChange={() => {
                setToasts(toasts.filter((t) => t.id !== toast.id));
              }}
              asChild
              forceMount
            >
              <motion.li
                initial={{ x: "calc(100% - 16px)" }}
                animate={{ x: 0 }}
                exit={{
                  opacity: 0,
                  zIndex: -1,
                  x: 300,
                  transition: { duration: 0.5 },
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                layout
                className="flex items-center justify-between rounded-lg border-gray-700 bg-gray-800 px-6 py-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <Toast.Description>{toast.message}</Toast.Description>
                <Toast.Close className="rounded text-gray-600 hover:text-gray-200 focus-visible:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500">
                  <XMarkIcon className="size-5" />
                </Toast.Close>
              </motion.li>
            </Toast.Root>
          ))}
        </AnimatePresence>
        <Toast.Viewport className="fixed right-4 top-4 flex w-80 flex-col-reverse gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" />
      </Toast.Provider>
    </div>
  );
}

function getRandomMessage() {
  const notifications = [
    "New message received!",
    "Update successful!",
    "Download complete.",
    "Profile updated.",
    "Payment processed.",
    "New friend request.",
    "Meeting rescheduled.",
    "Password changed.",
    "Item added to cart.",
    "Subscription expired.",
    "File uploaded successfully.",
    "Error processing request.",
    "Reminder: Appointment today.",
    "System maintenance soon.",
    "New comment on post.",
    "Weather alert: Heavy rain.",
    "Task deadline approaching.",
    "Discount code applied!",
    "Travel itinerary confirmed.",
    "Battery low: 10% remaining.",
  ];

  const randomIndex = Math.floor(Math.random() * notifications.length);

  return notifications[randomIndex];
}
