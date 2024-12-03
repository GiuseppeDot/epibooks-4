import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  useEffect(() => {
    setComment({
      comment: {
        ...comment,
        elementId: props.asin,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzIzZDA2ZmM4YzAwMTU2Yjg3MDAiLCJpYXQiOjE3MzI4MDEwODUsImV4cCI6MTczNDAxMDY4NX0.vy8Me-EfEHI5yRuxGl-rEWXwSMslgOjylgW6WfxwJPk",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        // this.setState({
        //   comment: {
        //     comment: "",
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    setComment({
      comment: "",
      rate: 1,
      elementId: props.asin,
    });
  }, [props.asin]);

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={(e) => {
              //     this.setState({
              //       comment: {
              //         ...this.state.comment,
              //         comment: e.target.value,
              //       },
              //     })

              setComment({
                ...comment,
                comment: e.target.value,
              });
            }}
          />

          {/* useEffect(() => {setComment ({
            comment: "",
            rate: 1,
            elementId: props.asin,
            })}, [props.asin]) */}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => {
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // })
              setComment({
                ...comment,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
