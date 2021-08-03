import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyFavorites.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Favorite from "./components/Favorite";
import UpdateForm from "./components/UpdateForm";

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      showFav: false,
      showForm: false,
      title:'',
      imageUrl:'',
      index:0
    };
  }

  componentDidMount = async () => {
    const resultData = await axios.get(
      `${process.env.REACT_APP_SERVER}/getFavData`
    );

    this.setState({
      favData: resultData.data,
      showFav: true,
    });
  };

  deleteFav = async (index) => {
    const id = this.state.favData[index]._id;

    const deleteFav = await axios.delete(
      `${process.env.REACT_APP_SERVER}/deleteFavData/${id}`
    );

    this.setState({
      favData: deleteFav.data,
    });
  };

  titleHandler = (e) =>{
    this.setState({
      title:e.target.value
    })
  }

  imageUrlHandler = (e) =>{
    this.setState({
      imageUrl:e.target.value
    })
  }

  showForm = (index) => {
    const data = this.state.favData[index]

    this.setState({
      title:data.title,
      imageUrl:data.imageUrl,
      showForm:true,
      index:index
    })
  }

  updateFav = async (e) => {
    e.preventDefault();

    const updatedData = {
      title:this.state.title,
      imageUrl:this.state.imageUrl
    }

    const newData = await axios.put(`${process.env.REACT_APP_SERVER}/updateFavData/${this.state.index}`, updatedData)

    this.setState({
      favData:newData.data
    })
  }

  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>This is a collection of my favorites</p>
        {
          this.state.showForm &&
          <UpdateForm
          title={this.state.title}
          imageUrl={this.imageUrl}
          titleHandler={this.titleHandler}
          imageUrlHandler={this.imageUrlHandler}
          updateFav={this.updateFav}
          />
        }
        {this.state.showFav &&
          this.state.favData.map((item, index) => {
            return (
              <Favorite color={item} index={index} deleteFav={this.deleteFav} showForm={this.showForm} />
            );
          })}
      </>
    );
  }
}

export default withAuth0(MyFavorites);
