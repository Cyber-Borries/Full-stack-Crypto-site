import React from "react";
import renderer from "react-test-renderer";

// import AppLayout from "../src/components/AppLayout";
// test("renders correctly", () => {
//   const tree = renderer.create(<AppLayout>AppLayout</AppLayout>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import MusicItem from "../src/components/MusicItem";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <MusicItem>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Card.Text></Card.Text>
            <Button></Button>
          </Card.Body>
        </Card>
      </MusicItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
