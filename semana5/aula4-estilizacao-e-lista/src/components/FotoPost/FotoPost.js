import React from "react";
import "./FotoPost.css";


class FotoPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <article>
        <p>
          <b>{this.props.texto}</b>
        </p>
        <img alt="Thumbnail" src={this.props.imagem}></img>
      </article>
    );
  };
}


export default FotoPost;