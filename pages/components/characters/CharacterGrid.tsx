import React from "react";
import { Card, Row, Col } from "antd";
import Image from "next/image";

const { Meta } = Card;

const CharacterGrid = ({
  items,
  isLoading,
}: {
  items: any;
  isLoading: any;
}) => {
  return isLoading ? (
    <p>loading</p>
  ) : (
    <div className="characters">
      <Row>
        {items.map((item: any, i: number) => (
          <Col key={i} md={6} sm={12} xs={24} className="card-space">
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img alt="example" src={item.img} className="ant-cards-img" />
              }
            >
              <Meta title={item.name} description={`Status:${item.status}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CharacterGrid;
