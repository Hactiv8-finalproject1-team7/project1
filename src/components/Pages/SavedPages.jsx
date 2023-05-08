import React, { useState, useEffect } from 'react';
import { useSavedNews } from '../Save';

function SavedPages() {
  const [savedNews, setSavedNews] = useSavedNews();

  if (savedNews.length === 0) {
    return <div>No saved news</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12 xl:px-14 max-w-[1080px]">
      <div className="mt-6 border-b-4 border-[#fff200] ">
        <h1 className="text-3xl text-center font-balto font-semibold">
          Saved News
        </h1>
      </div>
      <ul role="list" className="divide-y divide-gray-400">
        {savedNews.map((savedNewsItem, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <a
                href={savedNewsItem.url}
                target="_blank"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-slate-400"
              >
                {savedNewsItem.title}
              </a>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  Author {savedNewsItem.author}
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">
                  News from {savedNewsItem.source.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedPages;
