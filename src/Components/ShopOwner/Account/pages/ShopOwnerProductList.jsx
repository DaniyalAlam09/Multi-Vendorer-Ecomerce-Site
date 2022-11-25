// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};
const ShopOwnerProductList = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDelete = (id) => {
    // console.log(userID);
    axios
      .get(`http://localhost:4000/shopowners/deleteproduct/${id}`)
      .then((user) => {
        console.log("user delete");
        setOpen(false);
        // navigate(0);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/shopowners/myproducts", config)
      .then((response) => {
        setUser(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:4000/shopowners/viewproducts")
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       console.log(actualData);
  //       setUser(actualData);
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <Paper sx={{ width: "100%" }}>
      <h5>Total Registered Customers</h5>
      <h6>{user.length}</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Sr #</th>
            <th scope="col">Product Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Categorey</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">SKU</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.product_name}</td>
                <td>{item.product_brand}</td>
                <td>{item.product_catagorey}</td>
                <td>{item.product_color}</td>
                <td>{item.product_price}</td>
                <td>{item.product_sku}</td>
                <td>
                  <button className="buttons btn text-white btn-block btn-primary">
                    <Link
                      to={`/shopowner/edit-profile/${item._id}`}
                      className="text-white"
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={handleOpen}
                    className="buttons btn text-white btn-block btn-danger"
                  >
                    {" "}
                    Delete
                  </button>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="keep-mounted-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Are You Sure
                      </Typography>
                      <br />
                      <button
                        className="buttons btn text-white btn-block btn-danger"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="buttons btn text-white btn-block btn-danger"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </Box>
                  </Modal>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={user.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ShopOwnerProductList;
