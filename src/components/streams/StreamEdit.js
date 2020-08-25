import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.id, formValues);
  };

  renderStream() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
  render() {
    console.log(this.props.stream);
    return <div>{this.renderStream()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    stream: state.streams[id],
    id: id, // id to be send to fetchtStream & editStream as argument
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
