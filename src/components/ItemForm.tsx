import React, { FormEventHandler, useState } from "react";
import { ItemRequest } from "../types/ItemType";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ItemForm() {
  const initItem: ItemRequest = {
    title: "",
    barcode: 0,
    price: 0,
    quantity: 0,
    total_cost: 0,
    is_weight_item: false,
  };

  const [item, setItem] = useState<ItemRequest>(initItem);

  const onFormChange = (e: FormEventHandler<HTMLInputElement>) => {
    setItem((item) => {
      return {
        ...item,
        //@ts-ignore
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Form className="ar">
      <Form.Group className="mb-3">
        <Form.Control
          //@ts-ignore
          onInput={onFormChange}
          className="ar"
          type="text"
          name="title"
          placeholder="العنوان"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="barcode"
          placeholder="الباركود"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="price"
          placeholder="السعر"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="quantity"
          placeholder="الكمية"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="total_cost"
          placeholder="إحمالي التكلفة"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="not-weight-item">بالقعة</Form.Label>
        <Form.Check
          // @ts-ignore
          onInput={onFormChange}
          type="radio"
          name="is_weight_item"
          value="false"
          defaultChecked
          id="not-weight-item"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="is-weight-item">بالوزن</Form.Label>
        <Form.Check
          // @ts-ignore
          onInput={onFormChange}
          type="radio"
          name="is_weight_item"
          value="true"
          id="is-weight-item"
        />
      </Form.Group>
      <Button variant="primary">أضف</Button>
    </Form>
  );
}

export default ItemForm;
