import { CSSProperties } from "react";
import { Alert, Container } from "react-bootstrap";
import ItemForm from "../../components/ItemForm";

const style: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

function AddItem() {
  return (
    <div className="add-item-page" style={style}>
      <Container className="shadow-sm p-3 mb-5 bg-white w-50 rounded">
        <Alert
          className="ar"
          style={{ textAlign: "right" }}
          show={false}
          variant="success"
        >
          تمت إضافة السلع
        </Alert>
        <ItemForm />
      </Container>
    </div>
  );
}

export default AddItem;
