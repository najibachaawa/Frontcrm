import React, { Component } from "react";
import "./css/Team.css";
import { Button, Card, CardBody } from "reactstrap";
import { Badge } from "antd";
import SingleMember from "./Singlememeber";
class List extends React.Component {
  state = {
    members: [
      {
        id: 1,
        name: "Natarajah",
        phoneNumber: "0938073320",
        status: "actif",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg"
      },
      {
        id: 2,
        name: "Krot",
        phoneNumber: "0945565655",
        status: "absent",
        image:
          "http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png"
      },
      {
        id: 3,
        name: "Mandala",
        phoneNumber: "0975149873",
        image:
          "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg"
      },
      {
        id: 4,
        name: "Shiva",
        phoneNumber: "0638546385",
        image:
          "https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg"
      }
    ],
    visible: false
  };

  searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase();
    this.setState({
      members: this.state.members.filter(el => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      })
    });
  };
  handleShow = data => {
    this.setState({
      member: data,
      visible: true
    });
  };

  render() {
    const isSelected = this.state.members.id;
    let members = this.state.members.map((member, index) => {
      return (
        <ul key={member.id}>
          <img
            src={member.image}
            className="img"
            onClick={() => this.handleShow(member)}
            alt="img-logo"
          />

          <Badge status={member.status ? "success" : "error"} />
          {member.name}
        </ul>
      );
    });

    return (
      <div className="holder">
        <input type="text" classNAme="search" onChange={this.searchHandler} />
        {members}
        <div></div>
        {this.state.visible ? (
          <Card style={{ backgroundColor: "red" }}>
            <CardBody>
              <h1>{this.state.member.name}</h1>
              <h2>{this.state.member.phoneNumber}</h2>
            </CardBody>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default List;
