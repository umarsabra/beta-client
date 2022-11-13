import React, { FormEventHandler, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { ItemRequest } from "../types/ItemType";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ItemForm() {
  const initItem: ItemRequest = {
    title: "",
    barcode: 0,
    unit_type: "",
    price_per_unit: 0,
    quantity: 0,
    cost_per_quantity: 0,
    weight_per_quantity: 0,
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
    console.log(item);
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

      <InputGroup className="mb-3">
        <InputGroup.Text>EGP</InputGroup.Text>
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="price_per_unit"
          placeholder="سعر الوحده"
          id=""
        />
      </InputGroup>
      <Form.Group className="mb-3">
        <Form.Select
          placeholder="الوحده"
          name="unit_type"
          //@ts-ignore
          onChange={onFormChange}
        >
          <option value="PC">قطعة</option>
          <option value="KG">كيلو</option>
          <option value="L">لتر</option>
          <option value="GM">جرام</option>
          <option value="ML">مل لتر</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="quantity"
          placeholder="العدد"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="cost_per_quantity"
          placeholder="إحمالي التكلفة"
          id=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          // @ts-ignore
          onInput={onFormChange}
          type="number"
          name="weight_per_quantity"
          placeholder="الوزن"
          id=""
        />
      </Form.Group>
      <Button variant="success">أضف</Button>
    </Form>
  );
}

export default ItemForm;
