import "./App.css";
import React, { useEffect, useState } from "react";
import AppNav from "./AppNav";
import {
  Container,
  Form,
  Input,
  Button,
  Label,
  FormGroup,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

function Category() {
  const [expenseTypeName, setExpenseTypeName] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    categoryList();
  }, []);

  function categoryList() {
    fetch("/api/expense/getCategories").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  function saveCategory() {
    console.warn(expenseTypeName);
    let data = { expenseTypeName };
    fetch("/api/expense/newCategory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn(result);
    });
  }

  return (
    <div>
      <AppNav />
      <h3>Add Category </h3>
      <Container>
        <Form>
          <FormGroup>
            <Label for="expenseTypeName"> CategoryName</Label>
            <Input
              type="text"
              value={expenseTypeName}
              onChange={(e) => {
                setExpenseTypeName(e.target.value);
              }}
              name="expenseTypeName"
            />
          </FormGroup>
          <FormGroup>
            <Button type="button" onClick={saveCategory}>
              Add
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/">
              CANCEL
            </Button>
          </FormGroup>
        </Form>
      </Container>
      <Container>
        <h3>Category List</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.expenseTypeId}>
                <td>{item.expenseTypeName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default Category;
