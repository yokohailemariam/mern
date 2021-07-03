import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrdersById } from "../actions/orderActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const OrderMyListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const orderMyListById = useSelector((state) => state.orderMyListById);
  const { loading, error, orders, page, pages } = orderMyListById;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listMyOrdersById(userInfo._id, pageNumber));
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, pageNumber]);

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>PRODUCT NAME</th>
                <th>NAME</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(orders).map((order) => (
                <tr key={order._id}>
                  {order.orderItems.length === 0 ? (
                    <Message>your Order is empty</Message>
                  ) : (
                    order.orderItems.map((item) => (
                      <th key={item._id}>{item.name}</th>
                    ))
                  )}
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate
            pages={pages}
            page={page}
            userInfo={userInfo._id}
            isClientOrder={true}
          />
        </>
      )}
    </>
  );
};

export default OrderMyListScreen;
