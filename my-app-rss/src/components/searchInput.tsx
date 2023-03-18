import React from 'react';

interface SearchInputState {
  inputValue: string;
}

class SearchInput extends React.Component<object, SearchInputState> {
  constructor(props: object = {}) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const value = localStorage.getItem('inputValue');
    if (value) {
      this.setState({ inputValue: value });
    }
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleBeforeUnload = () => {
    localStorage.setItem('inputValue', this.state.inputValue);
  };

  handleClearInput = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className="searchInput__wrapper">
        <input
          type="text"
          placeholder="Search"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <div className="searchInput__cross" onClick={this.handleClearInput}></div>
      </div>
    );
  }
}

export default SearchInput;
