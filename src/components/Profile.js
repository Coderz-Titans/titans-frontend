import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <div id="profileImages">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYk9t5dLDzMc48KpI332L-xgcGWEK2BFqHw&usqp=CAU" alt="" id="coverImage"/>
          <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" id="userImage" />
          <img src="https://lh3.googleusercontent.com/proxy/TrX1YoNjfciLlhCtl4Y-PX6gqA9OE4Wk1yDa_kHAuG6zy5T8FH-__9h7YMPrZwSw6NwRhqILn2rYbbocWVtUJFNJLdM-bhx1" alt="" id="fixImage"/>
          <h2 id="text"> Abdullah-Alabbadi Ibrahim-Alhamshari</h2>
          <button id="buttonId">Follow</button>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Profile;
