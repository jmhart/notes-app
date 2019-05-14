import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import EditButton from "./EditButton";
import CloseButton from "./CloseButton";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  componentDidMount() {
    if (!this.props.text) {
      this.setState({ isEditing: true });
    }
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { id, title, text, onChange, handleDelete } = this.props;
    return (
      <div className="note">
        <div className="note-buttons">
          <EditButton
            disabled={!text}
            onClick={this.toggleEdit}
            isEditing={this.state.isEditing}
          />
          <CloseButton onClick={() => handleDelete(id)} />
        </div>
        <div className="note-title">{title}</div>
        {this.state.isEditing && (
          <textarea
            placeholder="Type notes here..."
            value={text}
            onChange={e => onChange(id, e.currentTarget.value)}
          />
        )}
        {!this.state.isEditing && (
          <div className="note-markdown">
            <ReactMarkdown source={text} />
          </div>
        )}
      </div>
    );
  }
}

export default Note;
