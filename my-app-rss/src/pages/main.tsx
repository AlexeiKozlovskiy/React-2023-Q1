import React from 'react';
import { CardList } from '../components/cardList';

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <h2 className="center-text">Main page</h2>
        <CardList />
      </main>
    );
  }
}
