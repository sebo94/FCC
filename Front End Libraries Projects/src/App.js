import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    quotes: [],
    quoteText: "",
    quoteAuthor: "",
    color: "",
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const quoteObj = this.getRandomQuote(data.quotes);
        const color = this.getRandomColor();
        this.setState({
          quotes: data.quotes,
          quoteText: quoteObj.quote,
          quoteAuthor: quoteObj.author,
          color,
        });
      });
  };

  getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  newQuoteHandler = (event) => {
    const newQuote = this.getRandomQuote(this.state.quotes);
    const color = this.getRandomColor();
    this.setState({
      quoteText: newQuote.quote,
      quoteAuthor: newQuote.author,
      color,
    });
  };

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    if (this.state.quotes.length === 0) {
      return <p>Loading quotes...</p>;
    }
    const { quoteText, quoteAuthor, color } = this.state;

    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <div className="container">
          <div id="quote-box">
            <p id="text" style={{ color }}>
              {quoteText}
            </p>
            <p id="author" style={{ color }}>
              - {quoteAuthor}
            </p>
            <div className="flex-container">
              <a
                id="tweet-quote"
                href={
                  "https://twitter.com/intent/tweet?&text=" +
                  encodeURIComponent('"' + quoteText + '" ' + quoteAuthor)
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Tweet this quote!"
                style={{ backgroundColor: color }}
              >
                <i class="fa fa-twitter"></i>
              </a>

              <button
                id="new-quote"
                onClick={this.newQuoteHandler}
                style={{ backgroundColor: color }}
              >
                New Quote
              </button>
            </div>
          </div>
          <footer>
            <p>This was made by me myself and I</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
