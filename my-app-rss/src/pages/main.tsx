import React from 'react';
import SearchInput from '../components/searchInput';
import { CardList } from '../components/cardList';

export class Main extends React.Component {
  render() {
    return (
      <main className="main wrapper">
        <h2 className="center-text">Main page</h2>
        <SearchInput />
        <CardList />
      </main>
    );
  }
}
