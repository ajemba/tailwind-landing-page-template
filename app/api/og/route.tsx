import { ImageResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="bg-gray-50 flex">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span>Need Real US Numbers?</span>
              <span tw="text-indigo-600">Start your journey today.</span>
            </h2>
            <div tw="mt-8 flex md:mt-0">
              <div tw="flex rounded-md shadow">
                <a
                  href="https://www.ekrpt.com/"
                  tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white"
                >
                  Get started
                </a>
              </div>
              <div tw="ml-3 flex rounded-md shadow">
                <a
                  href="https://www.ekrpt.com/"
                  tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 512,
      height: 256,
    },
  );
}
