import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SerachBar";

class App extends React.Component {
  state = { images: [], imageStatus: null };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
    if (this.state.images.length > 0) {
      this.setState({ imageStatus: null });
    } else if (term.length === 0) {
      this.setState({
        imageStatus: "You have to type a keyword in the search bar.",
      });
    } else {
      this.setState({ imageStatus: "Your search yielded no results." });
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmitMe={this.onSearchSubmit} />
        <p>{this.state.imageStatus}</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
