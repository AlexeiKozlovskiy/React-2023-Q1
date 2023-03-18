import React from 'react';
import SearchInput from '../components/searchInput';
import { CardList } from '../components/cardList';

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <SearchInput />
        <CardList />
      </main>
    );
  }
}
