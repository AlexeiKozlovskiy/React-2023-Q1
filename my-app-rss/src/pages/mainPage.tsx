import React from 'react';
import SearchInput from '../components/searchInput';
import { CardList } from '../components/cardList';

export function MainPage() {
  return (
    <main className="main wrapper">
      <section>
        <SearchInput />
        <CardList />
      </section>
    </main>
  );
}
