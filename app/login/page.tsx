"use client";

import {
  ArrowRightIcon,
  AtSymbolIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/Button";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(null, undefined);
  return (
    <section className="w-96 h-14 mt-20 m-auto rounded-md bg-gray-50 ">
      <h2 className="text-center text-sm font-medium"> Login</h2>
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/*Email*/}
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="test@gmail.com"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="email-error"
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/*Password*/}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                aria-describedby="password-error"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <LoginButton />
        </div>
      </form>
    </section>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full justify-center" aria-disabled={pending}>
      Login
    </Button>
  );
}
