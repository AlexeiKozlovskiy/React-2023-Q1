import React from 'react';
import SearchInput from '../components/searchInput';
import { CardList } from '../components/cardList';

export class MainPage extends React.Component {
  render() {
    return (
      <main className="main wrapper">
        <section>
          <SearchInput />
          <CardList />
        </section>
      </main>
    );
  }
}
