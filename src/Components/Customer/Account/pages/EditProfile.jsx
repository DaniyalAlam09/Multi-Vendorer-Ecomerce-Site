import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  let { itemId } = useParams();
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNo: "",
    address: "",
    profession: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError(false);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
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
      .get(`http://localhost:4000/users/user`, config)
      .then((res) => {
        setUser(res.data.user);
        console.log(res.data);
        setState((pre) => ({ ...pre, fname: res.data.user.firstName }));
        setState((pre) => ({ ...pre, lname: res.data.user.lastName }));
        setState((pre) => ({ ...pre, email: res.data.user.email }));
        setState((pre) => ({ ...pre, phoneNo: res.data.user.phoneNo }));
        setState((pre) => ({ ...pre, address: res.data.user.address }));
        setState((pre) => ({ ...pre, profession: res.data.user.profession }));
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", state.fname);
    formData.append("lastName", state.lname);
    formData.append("email", state.email);
    formData.append("phoneNo", state.phoneNo);
    formData.append("address", state.address);
    formData.append("profession", state.profession);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .put(
        `http://localhost:4000/users/updateprofile/${user._id}`,
        formData,
        config
      )
      .then((response) => {
        console.log(itemId);
        console.log(response.data);
        if (response.status === 200) {
          console.log("SUCCESSS");
          setOpen(true);

          toast.success("Sucessfull Update", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("../../user/customer-dashboard");
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div class="ml-5">
      <form autoComplete={false} onSubmit={handleSubmit}>
        <div class="row mt-4 mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label">First name</label>
              <input
                name="fname"
                onChange={handleChange}
                value={state.fname}
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label">Last name</label>
              <input
                name="lname"
                onChange={handleChange}
                value={state.lname}
                type="text"
                class="form-control"
              />
            </div>
          </div>
        </div>
        <div class="form-outline mb-4 form-group required">
          <label class="form-label control-label">Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={state.email}
            type="email"
            id="form6Example5"
            class="form-control"
            disabled
          />
        </div>

        <div class="form-outline mb-4 form-group required">
          <label class="form-label control-label">Profession</label>
          <input
            name="profession"
            value={state.profession}
            onChange={handleChange}
            type="text"
            class="form-control"
          />
        </div>

        <div class="form-outline mb-4 form-group required">
          <label class="form-label control-label">Phone Number</label>
          <input
            name="phoneNo"
            value={state.phoneNo}
            onChange={handleChange}
            type="tel"
            class="form-control"
          />
        </div>

        <div class="form-outline mb-4 form-group required">
          <label class="form-label control-label">Address</label>
          <input
            name="address"
            value={state.address}
            onChange={handleChange}
            type="text"
            class="form-control"
          />
        </div>
        <button
          type="submit"
          class="buttons btn text-white btn-block btn-primary"
        >
          Update
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default EditProfile;
