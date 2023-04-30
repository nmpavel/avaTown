import React, { ChangeEvent, Dispatch, KeyboardEvent, ReactNode, SetStateAction, useState } from 'react';
import { Input } from './Input';
import SearchIcon from '@/Icons/SearchIcon';

export type SearchbarProps = {
  placeHolder?: string;
  setSearchValue?: Dispatch<SetStateAction<string>>;
  className?: string;
};

const Searchbar = ({ placeHolder, setSearchValue, className }: SearchbarProps) => {
  const [search, setSearch] = useState('');
  let classNames = [
    'flex',
    'justify-between',
    'items-center',
    'gap-2',
    'border',
    'border-black-50',
    'text-gray-700',
    'rounded-md',
    'bg-neutral-200',
    'px-2 xl:px-4',
    'w-full',
    'overflow-x-hidden',
    className,
  ];

  const handleSearch = () => {
    setSearchValue?.(search);
  };

  const handleSearchChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
      return;
    }
  };
  return (
    <div className={classNames.join(' ')}>
      <Input
        type="text"
        containerClassName="w-4/5 border-0 !border-0 !ring-0 !ring-offset-0 !h-[30px] xl:!h-[34px] 3xl:!h-[38px] px-0 text-base-768 xl:text-base-1200 3xl:text-base-1450  placeholder:text-primary-300 bg-neutral-200"
        placeholder={placeHolder}
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e?.target?.value?.toString())}
        onKeyDown={handleSearchChange}
        onBlur={handleSearch}
      />
      <div
        className="cursor-pointer text-primary-300 hover:text-primary-100 transition-colors duration-200"
        onClick={handleSearch}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
